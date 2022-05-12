import React, {useState} from 'react';
import './messagepanel.scss';
import emojiIcon from '../../img/svg/smile.svg';
import planeIcon from '../../img/svg/paper-plane.svg';

const MessagePanel = ({sendMessage}) => {
    const [message, setMessage] = useState("")

    const handleChangeMessage = (text) => {
        setMessage(text)
    }

    const handleSubmit = () => {
        // console.log('clicked')
        sendMessage(message)
        setMessage("")
    }
    return (
        <div className='message-panel'>
            <div className='message-panel__input-block'>
                <button className='message-panel__emoji-button'>
                    <img src={emojiIcon} alt="emoji"></img>
                </button>
                <input value={message} onChange={(e) => handleChangeMessage(e.target.value)} className='message-panel__input' placeholder='Type your message...' type="text"></input>
                {/* <button>
                    <img></img>
                </button> */}
                <button onClick={handleSubmit} className='message-panel__send-button'>
                    <img className='message-panel__send-icon' src={planeIcon} alt="send"></img>
                </button>
            </div>
        </div>
    )
}

export default MessagePanel