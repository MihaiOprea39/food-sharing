import React, {useContext, useEffect, useState} from 'react';
import './conversations.scss';
import {Link} from "react-router-dom";
import Conversation from "./Conversation";
import MessagesPanel from "./MessagesPanel";
import firebase from "../../firebase";
import {AuthContext} from "../../Auth";
import planeLoader from '../../assets/img/plane-loader2.gif';

export default function Conversations() {
    const [conversations, setConversations] = useState([]);
    const [activeConversation, setActiveConversation] = useState(null);
    const {currentUser} = useContext(AuthContext);

    const handleConversationInteract = (conversation) => {
        setActiveConversation(conversation);
    };

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
        // getAllConversations();
    }, []);

    return (
        <div className="conversations-parent-wrapper">
            <header className="main-header">
                <div id="logo">
                    <a href="#">
                        <img src="dist/media/img/logo.png" alt="logo"/>
                    </a>
                </div>
                <div className="header-nav">
                    <ul className="nav">
                        <li><Link to="/" data-navigation-target="contact-information">Home</Link></li>
                    </ul>
                </div>
                <div className="header-right">
                    <div className="navbar-toggler">
                        <a href="#">
                            <i data-feather="menu"></i>
                        </a>
                    </div>
                    <div className="dropdown">
                        <a href="#" data-toggle="dropdown">
                            <span className="mr-2 d-none d-sm-inline-block">Mirabelle Tow</span>
                            <figure className="avatar">
                                <img src="https://via.placeholder.com/200X200" className="rounded-circle" alt="image"/>
                            </figure>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a href="#" className="dropdown-item"
                               data-navigation-target="contact-information">Profile</a>
                            <a href="#" className="dropdown-item" data-toggle="modal"
                               data-target="#settingModal">Settings</a>
                            <div className="dropdown-divider"></div>
                            <a href="login.html" className="dropdown-item text-danger">Logout</a>
                        </div>
                    </div>
                </div>
            </header>

            <div className="layout">

                <div className="content">

                    <div id="chats" className="sidebar chat-list active">
                        <header>
                            <span>Chats</span>
                        </header>
                        <form>
                            <input type="text" className="form-control" placeholder="Search"/>
                        </form>
                        <div className="sidebar-body custom-scrollbar">
                            {conversations && (
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
                            )}
                            <img src={planeLoader} alt=""/>
                        </div>
                    </div>

                    <MessagesPanel current={activeConversation} user={currentUser} onMessageSubmit={sendMessage}/>

                </div>
            </div>
        </div>
    );
}
