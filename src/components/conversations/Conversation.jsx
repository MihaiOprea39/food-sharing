import React from "react";
import format from "date-fns/format";
import {getFirebaseTime} from "../../services/time";

export default function Conversation({conversation, showUnreadMessages, user, active, onInteract}) {

    const getLatestMessage = () => {
        return conversation && conversation.messages && conversation.messages[conversation.messages.length - 1] &&
            conversation.messages[conversation.messages.length - 1];
    }

    const getMessagePreview = () => {
        return`${getMessagePrefix()} ${getLatestMessage().message}`;
    }

    const getMessagePrefix = () => {
        return user && conversation && user.uid === getLatestMessage().from ? 'You: ' : '';
    }


    const getConversationParsedDate = () => {
        return conversation && conversation.messages && conversation.messages[conversation.messages.length - 1] &&
            format(getFirebaseTime(conversation.messages[conversation.messages.length - 1].timestamp.seconds,
                conversation.messages[conversation.messages.length - 1].timestamp.nanoseconds),
                'MMM dd, yyyy');
    }

    const getUnreadMessagesCount = () => {
        return conversation.messages.filter(({isRead}) => !isRead).length;
    }


    return (
        <li className={`list-group-item ${active ? 'active-chat' : ''}`} onClick={() => onInteract(conversation)}>
            <figure className="avatar avatar-state-success">
                <img src="https://via.placeholder.com/200X200" className="rounded-circle"
                     alt="foodshare-user-avatar"/>
            </figure>
            <div className="users-list-body">
                <div>
                    <h5 className="text-primary">{conversation.to.displayName}</h5>
                    <p>{getMessagePreview()}</p>
                </div>
                <div className="users-list-action">
                    {showUnreadMessages && <div className="new-message-count">{getUnreadMessagesCount()}</div>}
                    <small className="text-primary">{getConversationParsedDate()}</small>
                </div>
            </div>
        </li>
    );
}
