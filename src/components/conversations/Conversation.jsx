import React from "react";

export default function Conversation({conversation, active, onInteract}) {
    return (
        <li className={`list-group-item ${active ? 'active-chat' : ''}`} onClick={() => onInteract(conversation)}>
            <figure className="avatar avatar-state-success">
                <img src="https://via.placeholder.com/200X200" className="rounded-circle"
                     alt="foodshare-user-avatar" />
            </figure>
            <div className="users-list-body">
                <div>
                    <h5 className="text-primary">{conversation.name}</h5>
                    <p>What's up, how are you?</p>
                </div>
                <div className="users-list-action">
                    <div className="new-message-count">3</div>
                    <small className="text-primary">{conversation.timestamp}</small>
                </div>
            </div>
        </li>
    );
}
