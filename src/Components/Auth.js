import React from 'react'
import {CTX} from '../store'
import '../App.css'

const Auth = props =>{
    const {user, setUser} = React.useContext(CTX)
    const [input, setInput] = React.useState('')
    if (user){
        return(
        <div>
            {props.children}
        </div>
        )
    }
    else{
        return(
            <div className="Auth">
                <h1>React chat app</h1>
                <h3>Please type in your nickname in form below</h3>
            <form onSubmit={(e)=>{ 
                e.preventDefault()
                setUser(input)
            }}>
                <input onChange={(e) =>setInput(e.target.value)} />
                
          </form>
        <button onClick={(e)=>{ 
                e.preventDefault()
                setUser(input)
            }}>Log in</button>
          </div>
        )
    }
}

export default Auth;