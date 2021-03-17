import React from 'react'
import {CTX} from '../store'
import '../App.css'
const Header = () =>{

    const {user, activeTopic} = React.useContext(CTX)
    return(
        <div className='header'>
       <h2>Active channel: {activeTopic}/Logged as {user}</h2>
       </div>
    )
}
export default Header