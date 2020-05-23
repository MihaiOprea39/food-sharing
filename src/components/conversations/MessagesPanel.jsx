import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import noResultsBanner from '../../assets/img/no-results-2.png';
import format from 'date-fns/format';
import firebase from "../../firebase";
import {getFirebaseTime} from "../../services/time";

const MessagesPanel = forwardRef(({current, accepted = 1, user, onMessageSubmit}, ref) => {
    const [newMessage, setNewMessage] = useState('');
    const messagePanelBodyRef = useRef();

    const getMessageParsedDate = (message) => {
        return format(getFirebaseTime(message.timestamp.seconds, message.timestamp.nanoseconds), 'MMM dd, yyyy');
    }

    useImperativeHandle(ref, () => ({
        scrollToBottom() {
            messagePanelBodyRef.current &&
            messagePanelBodyRef.current.scroll({
                top: messagePanelBodyRef.current.scrollHeight,
                behavior: 'auto'
            });
        }
    }));

    const handleMessageSubmit = (event) => {
        event.preventDefault();

        if (!newMessage) {
            return;
        }

        const payload = {
            message: newMessage,
            isRead: false,
            timestamp: new firebase.firestore.Timestamp.now(),
            from: current.from.id,
            to: current.to.id,
            conversationId: current.id
        }

        onMessageSubmit(payload);
        setNewMessage('');
    };

    const handleMessageTyping = ({target: {value}}) => {
        setNewMessage(value);
    };

    const areAvatarAndDateVisible = (index) => {
        if (user && current && current.messages && !!current.messages.length && current.messages[index]) {
            if (current.messages[index + 1]) {
                if (current.messages[index].from !== current.messages[index + 1].from) {
                    return 'visible';
                } else {
                    return 'invisible';
                }
            } else {
                return 'visible';
            }
        }
        return 'invisible';
    }

    return (
        <div className={`messages-panel-wrapper ${!current ? 'empty' : ''}`}>
            {!current ? (
                <div className="no-current-chat">
                    <img src={noResultsBanner} alt="no messages banner for restaurants"/>
                    <h4>No conversation preview available. Try selecting one to begin.</h4>
                </div>
            ) : (
                <div className="chat position-relative">
                    {!accepted && (
                        <div className="not-accepted-yet">
                            <div className="accept-conversation">
                                No preview available. Select a conversation to begin.
                            </div>
                        </div>
                    )}
                    <div className={`chat-body custom-scrollbar ${current ? '' : 'inactive'}`}
                         ref={messagePanelBodyRef}>
                        <div className="messages">
                            {current && current.messages.map((message, index) =>
                                <div className={`message-item ${message.from === user.uid ? 'outgoing-message' : ''}`}
                                     key={index}>
                                    <div className={`message-avatar ${areAvatarAndDateVisible(index)}`}>
                                        <figure className="avatar" title="Mirabelle Tow">
                                            <img src="https://via.placeholder.com/200X200" className="rounded-circle"
                                                 alt="image"/>
                                        </figure>
                                    </div>
                                    <div>
                                        <div className="message-content">
                                            {message.message}
                                        </div>
                                        <div
                                            className={`time ${areAvatarAndDateVisible(index)}`}>{getMessageParsedDate(message)}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={`chat-footer ${current ? '' : 'inactive'}`}>
                        <form onSubmit={handleMessageSubmit}>
                            <div>
                                <button className="btn btn-danger mr-3 d-inline d-sm-none btn-close-chat"
                                        data-toggle="tooltip" title="Emoji" type="button">
                                    <i data-feather="arrow-left"/>
                                </button>
                            </div>
                            <input type="text" className="form-control" placeholder="Write a message..."
                                   autoComplete="off" onChange={handleMessageTyping} value={newMessage}/>
                            <div className="form-buttons">
                                <button className={`btn btn-primary ${newMessage ? '' : 'not-allowed-element'}`}
                                        type="submit">
                                    <i className="fas fa-paper-plane" style={{fontSize: '18px'}}/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
});

export default MessagesPanel;
