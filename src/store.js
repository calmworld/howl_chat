import React, {createContext, useState} from 'react'
import io from 'socket.io-client'

export const CTX = createContext();

const initState = {

general:[
    {from: 'general_user', msg: 'hello'}
],
offtopic:[
    {from: 'offtopic_user', msg: 'hey'}
],
funny_cats:[
    {from: 'cat', msg: 'meow'}
]

}

function reducer(state, action){
    const {from, msg, topic} = action.payload;
    switch(action.type){
       case 'RECIVE_MESSEAGE':
        return{
            ...state,
            [topic]: [
                ...state[topic], {from, msg }
        ]
        }
        default: return state
    }
}

let socket;

const sendChatAction = (value) =>{
    socket.emit('chat messeage', value)
    }

export default function Store(props){
    const [allChats, dispatch] = React.useReducer(reducer, initState)
    const [user, setUser] = React.useState()
    const [activeTopic, setActiveTopic] = useState('general')
    const[channels, setChannels] = useState(['general', 'offtopic', 'funny_cats'])
    const[input, setInput] = useState('')

    if(!socket){
        socket = io(':3001')
        socket.on('chat messeage', function(msg){
        dispatch({type:'RECIVE_MESSEAGE' ,payload: msg})
        })
    }




return(
    <CTX.Provider value={{
        allChats, 
        sendChatAction, 
        user, 
        setUser, 
        activeTopic, 
        setActiveTopic, 
        channels,
        setChannels,
        input,
        setInput
    }}>
        {props.children}
    </CTX.Provider>
)

}