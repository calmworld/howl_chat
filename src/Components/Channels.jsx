import React from 'react';
import {CTX} from '../store'
import '../App.css';
const Channels = props =>{

    

    const {setActiveTopic, channels} = React.useContext(CTX)
    return(
            
      <div className="channels">
      {channels.map(item =>(
        <li onClick={() => setActiveTopic(item)}>{item}</li>))}
</div>
    )
}

export default Channels;