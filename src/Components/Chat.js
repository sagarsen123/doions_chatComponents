import React, { useState } from "react";
import Img from "../images/chat.png";
import "../css/chat.css";

export default function Chat() {
  const [imgBox, setIBoxClass] = useState("ImgBox");
  const [messCount, setmessCount] = useState(1);
  const [messText, setMessText] = useState("");

  const [notClss, setNotClass] = useState("notification");

  let popNotification =
    () => {

      setmessCount(messCount => messCount + 1);

      messCount !== 0 ? setIBoxClass("Img_Click") : setIBoxClass("ImgBox");
      let ans = "";
      if (messCount === 0) ans = "";
      else if (messCount < 9) ans += messCount;
      else ans = "+9";

      setNotClass(p => "notPop");

      setTimeout(() => {
        setNotClass(p => "notification");
      }, 800)

      setMessText(ans);
    };
  return (
    <>
      <div className="outDiv" onClick={popNotification}>
        <div className={imgBox}>
          <div className={notClss}>
            {messText}
          </div>
          <img src={Img} className="ImgClass" alt="" />
        </div>
      </div>
      {/* <button onClick={popNotification}>On Click</button> */}
    </>
  );
}
