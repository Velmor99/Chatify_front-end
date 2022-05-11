import React from 'react';
import './messagepanel.scss';
import emojiIcon from '../../img/svg/smile.svg';
import planeIcon from '../../img/svg/paper-plane.svg';

const MessagePanel = () => {
    return (
        <div className='message-panel'>
            <div className='message-panel__input-block'>
                <button className='message-panel__emoji-button'>
                    <img src={emojiIcon} alt="emoji"></img>
                </button>
                <input className='message-panel__input' placeholder='Type your message...' type="text"></input>
                {/* <button>
                    <img></img>
                </button> */}
                <button className='message-panel__send-button'>
                    <img className='message-panel__send-icon' src={planeIcon} alt="send"></img>
                </button>
            </div>
        </div>
    )
}

export default MessagePanel