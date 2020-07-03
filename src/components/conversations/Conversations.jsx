import React, {useContext, useEffect, useRef, useState} from 'react';
import './conversations.scss';
import Conversation from "./Conversation";
import MessagesPanel from "./MessagesPanel";
import firebase from "../../firebase";
import {AuthContext} from "../../contexts/AuthContext";
import loadingScreen from '../../assets/img/gears-animation2.gif';

export default function Conversations() {
    const [conversations, setConversations] = useState([]);
    const [activeConversation, setActiveConversation] = useState(null);
    const [hasFinishedLoading, setHasFinishedLoading] = useState(false);
    const messagePanelRef = useRef();
    const {currentUser} = useContext(AuthContext);

    const handleConversationInteract = (conversation) => {
        if (activeConversation && conversation.id === activeConversation.id) {
            return;
        }

        const updatedConversation = {
            ...conversation,
            messages: conversation.messages.map(message => ({
                ...message,
                isRead: true
            }))
        };

        const currentConversation = conversations.find(({id}) => id === conversation.id);
        currentConversation.messages.forEach(message => message.isRead = true);


        const updatedConversations = conversations.map(conv => ({
            ...conv,
            ...conv.id === conversation.id && {
                messages: conv.messages.map(message => ({
                    ...message,
                    isRead: true
                }))
            }
        }));

        setActiveConversation(updatedConversation);
        // setConversations(updatedConversations);
        markMessagesAsRead(conversation.id);
    };

    const handleConversationAction = (state) => {
        firebase
            .firestore()
            .collection('conversations')
            .doc(activeConversation.id)
            .set({
                isAccepted: state
            }, {
                merge: true
            }
            )
            .then(() => handleConversationActionState(state));
    }

    const handleConversationActionState = (state) => {
        const updatedConversation = {
            ...activeConversation,
            isAccepted: state
        };

        const currentConversation = conversations.find(({id}) => id === activeConversation.id);
        currentConversation.isAccepted = state;

        setActiveConversation(updatedConversation);
    }

    const markMessagesAsRead = (conversationId) => {
        firebase
            .firestore()
            .collection('conversations')
            .doc(conversationId)
            .collection('messages')
            .get()
            .then(snap => {
                snap.forEach(doc => {
                    firebase.firestore()
                        .collection('conversations')
                        .doc(conversationId)
                        .collection('messages')
                        .doc(doc.id)
                        .set({
                            isRead: true
                        }, {
                            merge: true
                        }).then()
                })
            })
    }

    const getAllConversations = async () => {
        const currentUserType = currentUser.type === '0' ? 'ngo' : 'restaurant';

        firebase
            .firestore()
            .collection('conversations')
            .where(currentUserType, '==', currentUser && currentUser.uid)
            .get()
            .then(async snapshot => {
                const promisedConversations = snapshot.docs.map(async document => {
                    const restaurantUid = document.data().restaurant;
                    const ngoUid = document.data().ngo;

                    const restaurant = await getNgoOrRestaurantByUid(restaurantUid);
                    const ngo = await getNgoOrRestaurantByUid(ngoUid);
                    const messages = await getMessages(document.id);

                    return {
                        ...document.data(),
                        id: document.id,
                        ...(currentUserType === 'ngo' ? {
                            from: {...ngo, id: ngoUid},
                            to: {...restaurant, id: restaurantUid}
                        } : {
                            from: {...restaurant, id: restaurantUid},
                            to: {...ngo, id: ngoUid}
                        }),
                        messages
                    }
                });

                const resolvedConversations = await Promise.all(promisedConversations);

                setConversations(resolvedConversations || []);
                setHasFinishedLoading(true);
            })

    };

    const getNgoOrRestaurantByUid = async (uid) => {
        return await firebase
            .firestore()
            .collection('users')
            .doc(uid)
            .get()
            .then(snap => snap.data());
    };

    const getMessages = async (uid) => {
        return await firebase
            .firestore()
            .collection('conversations')
            .doc(uid)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .get()
            .then(snap => snap.docs.map(doc => doc.data()));
    };

    const sendMessage = (message) => {
        const {conversationId, ...messagePayload} = message;

        firebase
            .firestore()
            .collection('conversations')
            .doc(conversationId)
            .collection('messages')
            .add(messagePayload)
            .then(() => updateCurrentConversations(conversationId, messagePayload));
    };

    const updateCurrentConversations = (convId, messagePayload) => {
        const updatedConversations = conversations.map((conversation) => ({
                ...conversation,
                ...(conversation.id === convId && {
                    messages: [...conversation.messages, messagePayload]
                })
            })
        );
        const updatedActiveConversation = {
            ...activeConversation,
            messages: [...activeConversation.messages, messagePayload]
        };

        setConversations(updatedConversations);
        setActiveConversation(updatedActiveConversation);
    }

    useEffect(() => {
        (async function asyncFn() {
            await getAllConversations();
        })();
    }, []);

    useEffect(() => {
        messagePanelRef.current && messagePanelRef.current.scrollToBottom();
    }, [activeConversation]);

    return (
        <div className="conversations-parent-wrapper">

            <div className="layout" style={{paddingTop: '80px'}}>

                <div className="content">

                    <div id="chats" className="sidebar chat-list active">
                        <header>
                            <span>Chats</span>
                        </header>
                        <div className={`sidebar-body custom-scrollbar ${!conversations.length ? 'loading' : ''}`}>
                            {conversations.length || hasFinishedLoading ? (
                                <ul className="list-group list-group-flush">
                                    {conversations.map((conversation, index) =>
                                        <Conversation key={index}
                                                      conversation={conversation}
                                                      user={currentUser}
                                                      active={activeConversation && activeConversation.id === conversation.id}
                                                      onInteract={handleConversationInteract}
                                        />
                                    )}
                                </ul>
                            ) : (
                                <img src={loadingScreen} alt=""/>
                            )}
                        </div>
                    </div>

                    <MessagesPanel current={activeConversation}
                                   user={currentUser}
                                   ref={messagePanelRef}
                                   onMessageSubmit={sendMessage}
                                   accepted={activeConversation && activeConversation.isAccepted}
                                   onRequestAction={handleConversationAction}
                    />

                </div>
            </div>
        </div>
    );
}
