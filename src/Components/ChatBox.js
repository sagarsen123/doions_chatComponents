import React, { useState } from "react";
import "../css/chatBox.css";
import UserBox from "./UserBox"
import img from "../images/userDp.png";

export default function ChatBox(props) {
  const [userSList, updateUserList] = useState([]);
  const [Conversations,setConversation] = useState(userSList);
  let senderName = "Rohan Roy";
  let senderLastMess ="How Are You?";

  const updateList = () =>{
    console.log("in");
    updateUserList(p => [<UserBox Img={img} upDateHeadText={props.upDateHeadText} setConversation={convHandler} senderName={senderName} senderLastMess={senderLastMess}/>,...p ]);
    setConversation(userSList);
  }

  const convHandler = (conv) => {
    setConversation(conv)
  }

  

  return (
    <>
      <div className="ChatBox" >{Conversations}</div>

      <button className="btn btn-primary" onClick={updateList}>Add User</button>
    </>
  );
}
