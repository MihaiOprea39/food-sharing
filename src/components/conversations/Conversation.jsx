import React from "react";
import format from "date-fns/format";
import {getFirebaseTime} from "../../services/time";

export default function Conversation({conversation, user, active, onInteract}) {

    const getLatestMessage = () => {
        return conversation && conversation.messages && conversation.messages[conversation.messages.length - 1] &&
            conversation.messages[conversation.messages.length - 1];
    }

    const getMessagePreview = () => {
        if (conversation.isAccepted !== undefined) {
            return conversation.isAccepted ?`${getMessagePrefix()} ${getLatestMessage().message}` : <i>Messages no longer available.</i>;
        } else {
            return`${getMessagePrefix()} ${getLatestMessage().message}`;
        }
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
        return conversation.messages.filter(({isRead, from}) => !isRead && from !== user.uid).length;
    }

    return (
        <li className={`list-group-item ${active ? 'active-chat' : ''} ${!!getUnreadMessagesCount() ? 'has-unread-messages' : ''}`}
            onClick={() => onInteract(conversation)}>
            <figure className={`avatar ${!!getUnreadMessagesCount() ? 'avatar-state-success' : ''}`}>
                <img src={conversation.to.avatar} className="rounded-circle"
                     alt="foodshare-user-avatar"/>
            </figure>
            <div className="users-list-body">
                <div>
                    <h5 className={`text-primary ${!!getUnreadMessagesCount() ? 'font-weight-600' : ''}`}>{conversation.to.displayName}</h5>
                    <p>{getMessagePreview()}</p>
                </div>
                <div className="users-list-action">
                    {!!getUnreadMessagesCount() && <div className="new-message-count">{getUnreadMessagesCount()}</div>}
                    <small className="text-primary">{getConversationParsedDate()}</small>
                </div>
            </div>
        </li>
    );
}
