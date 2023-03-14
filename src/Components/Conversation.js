import React, { useState } from "react";
import "../css/conversation.css";

export default function Conversation() {
  // const [messList,updateMessList] = useState([]);

  return (
    <div className="conversation">
      <div className="messageBox">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil natus
        rem, optio debitis quasi tempore excepturi molestiae nisi culpa rerum
        enim facere, quo cupiditate, earum animi quia ad reprehenderit
        voluptatem suscipit ducimus. Et fugit adipisci esse cumque modi ducimus
        earum assumenda magni consequuntur nam, repudiandae, eveniet
        minus accusamus necessitatibus quae.
      </div>
      <div className="sendmess">
        <input type="text" className="textmess" />
        <button className="sendButton btn btn-primary">Send</button>
      </div>
    </div>
  );
}
