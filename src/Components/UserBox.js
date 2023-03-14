import React from "react";

import "../css/userBox.css";
import Chat from "../Components/Chat"
import Conversation from "./Conversation";

export default function UserBox(props) {

  console.log(typeof(props.setConversation))

  const loadUserChat = () =>{
    props.setConversation(Conversation);
    props.upDateHeadText(props.senderName);
  }

  return (
    <div className="userContainer" onClick={loadUserChat}>
      <div className="imageContainer">
        <img src={props.Img} className="imgClass" alt="" />
      </div>
      <div className="senderDetails">
        <div className="senderName">{props.senderName}</div>
        <div className="senderMessDetails">
            <div className="senderLastMess">{props.senderLastMess}</div>
            <div className="messIcon"><Chat /></div>
        </div>
      </div>
    </div>
  );
}
