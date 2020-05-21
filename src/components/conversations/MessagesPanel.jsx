import React from "react";
import noResultsBanner from '../../assets/img/no-results-2.png';

export default function MessagesPanel({current, accepted = 1, user}) {
    
    console.log(current && current.messages);

    const areAvatarAndDateVisible = (index) => {
        if (user && current && current.messages && !!current.messages.length && current.messages[index]) {
            if (current.messages[index + 1]) {
                if (current.messages[index].from === user.uid && current.messages[index + 1].from !== user.uid) {
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
                <div className="chat">
                    {!accepted && (
                        <div className="no-current-chat">
                            No preview available. Select a conversation to begin.
                        </div>
                    )}
                    <div className={`chat-body custom-scrollbar ${current ? '' : 'inactive'}`}>
                        <div className="messages">
                            {current && current.messages.map((message, index) =>
                                <div className={`message-item ${message.from === user.uid ?'outgoing-message' : ''}`} key={index}>
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
                                        <div className={`time ${areAvatarAndDateVisible(index)}`}>{message.timestamp}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={`chat-footer ${current ? '' : 'inactive'}`}>
                        <form>
                            <div>
                                <button className="btn btn-danger mr-3 d-inline d-sm-none btn-close-chat"
                                        data-toggle="tooltip" title="Emoji" type="button">
                                    <i data-feather="arrow-left"/>
                                </button>
                            </div>
                            <input type="text" className="form-control" placeholder="Write a message."/>
                            <div className="form-buttons">
                                <button className="btn btn-primary" type="submit">
                                    <i className="fas fa-paper-plane" style={{fontSize: '18px'}}/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
