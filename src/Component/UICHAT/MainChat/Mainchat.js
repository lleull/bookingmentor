import React from "react";
import "./mainchat.css";
import dog1 from "./dog-image-1.jpg";
import dog2 from "./dog-image-2.jpg";
import dog3 from "./dog-image-3.jpg";

const Mainchat = (props) => {



 
  return (
    <div className="mainchat">
      <div className="chats">
        <p className="comtext">Thats sounds great. i'd be happy to be there</p>
        <p className="comtext">
          Could you send over some pictures of Your dog please?
        </p>
        <div className="sendtext">
          <div className="imgs">
            <img className="dogs" src={dog1} alt="s" />
            <img className="dogs" src={dog2} alt="s" />
            <img className="dogs" src={dog3} alt="s" />
          </div>
          <p className="sendinput">Here are a few pictures. Shes is so Cute</p>
          <p className="sendinput">Can you make it</p>
        </div>
        <p className="comtext">
          She looks so happy! the time we discussed works. How long shall i take
          her out
        </p>

        <button className="walks">
          30 minute walk <h4>$25</h4>
        </button>
        <button className="walks">
          1 hour walk <h4>$25</h4>{" "}
        </button>

        {props.sendmesg ? <p className="comtext">{props.message}</p> : "..."}
      
      </div>
    </div>
  );
};

export default Mainchat;
