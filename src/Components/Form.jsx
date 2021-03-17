import React from 'react'
import {CTX} from '../store'
import '../App.css'
const Form = (props) =>{
    const {input, setInput, sendChatAction, user, activeTopic} = React.useContext(CTX)

    const handleSubmit = event =>{
            event.preventDefault();
            sendChatAction({from: user, msg: input, topic:activeTopic});
            setInput('');
    }

    return(
        <div className="form">
            <form className="form-items" onSubmit={handleSubmit}>
                <input type="text"
                onChange={e=>( setInput(e.target.value))}
                value={input}
                />
                <button>Send</button>
            </form>
        </div>
        )
}

export default Form;