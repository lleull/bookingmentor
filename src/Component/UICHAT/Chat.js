import React from "react";
import "./chat.css";
import image1 from "./avatar.jpg";
import Mainchat from "./MainChat/Mainchat";
import { useState } from "react";

const Chat = () => {
  const [message, setmessage] = useState('');
  const [sendmesg, setsendmesg] = useState(false);
  const users = [{}];
  console.log(users);
  const handleform = (e) => {
    e.preventDefault();
    setsendmesg(true);
    users.push( message );
    setmessage('')
  };
  const messagehandler = (e) => {
    setmessage(e.target.value);
  };
  return (
    <div className="chatpage">
      <div className="phone">
        <div className="custom"></div>
        <div className="phonetop">
          <img
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "2px solid white",
            }}
            src={image1}
            alt="as"
          />
          <div className="toptext">
            <h3>Samson Green</h3>
            <p>Available to Walk</p>
          </div>
        </div>
        <Mainchat message={message} user={users} sendmesg={sendmesg} />
        <form onClick={handleform}>
          <input
            onChange={messagehandler}
            type="text"
            placeholder="Type a message..."
            required
          />
          <button className="submitbtn" type="submit'">
            Go
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
