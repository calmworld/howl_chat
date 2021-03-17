import React from 'react';
import {CTX} from '../store'
import {GiSpeaker} from 'react-icons/gi'
const Chat = props =>{
    const {allChats, activeTopic} = React.useContext(CTX)
    let i;
    const makeVoice = value =>{
      i = new SpeechSynthesisUtterance(value)
      window.speechSynthesis.speak(i)
    }
    return(
      <div className="chat">
    <div>
       {allChats[activeTopic].map(item =>(
         <p><strong>{item.from}</strong>: {item.msg}<GiSpeaker className={'speaker'} onClick={() => makeVoice(item.msg)}/></p>
       ))}
    </div>
    </div>
    )
}
export default Chat;