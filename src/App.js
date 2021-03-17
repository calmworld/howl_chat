import React from 'react';
import './App.css';
import Channels from './Components/Channels';
import Chat from './Components/Chat';
import Store from './store';
import Form from './Components/Form'
import Auth from './Components/Auth'
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Store> {/* main context */}
      <Auth> {/* basic auth/welcome component */}
      <Header/>
      <div className="main-wrapper">
      <Channels />
      <Chat  /> {/* component rendering msg's */}
      </div>
      <Form/> {/* msg input component */}
        </Auth>
      </Store>
    </div>
  );
}

export default App;
