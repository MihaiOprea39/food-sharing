import React from "react";

export default function Conversation({conversation, user, active, onInteract}) {

    const getMessagePreview = () => {
        return conversation && conversation.messages &&
            `${getMessagePrefix()} ${conversation.messages[conversation.messages.length - 1].message}`;
    }

    const getMessagePrefix = () => {
        return user && conversation && user.uid === conversation.from.id ? 'You: ' : '';
    }

    return (
        <li className={`list-group-item ${active ? 'active-chat' : ''}`} onClick={() => onInteract(conversation)}>
            <figure className="avatar avatar-state-success">
                <img src="https://via.placeholder.com/200X200" className="rounded-circle"
                     alt="foodshare-user-avatar" />
            </figure>
            <div className="users-list-body">
                <div>
                    <h5 className="text-primary">{conversation.to.displayName}</h5>
                    <p>{getMessagePreview()}</p>
                </div>
                <div className="users-list-action">
                    <div className="new-message-count">3</div>
                    {/*<small className="text-primary">{conversation.timestamp}</small>*/}
                </div>
            </div>
        </li>
    );
}
