import React from 'react'
import './App.css'
import Chat from './Component/UICHAT/Chat'
const App = () => {
  return (
    <div className='app'>
      <div className='chat'></div>
 <Chat/>
 <div className='solution'>
  <h1>Simple Booking</h1>
  <p style={{width: "50%", color:'white'}}>Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangmetsn andmake bookings. Once the walk has been completed you can rate your walker and book again all through the chat</p>

 </div>
 
    </div>
  )
}

export default App