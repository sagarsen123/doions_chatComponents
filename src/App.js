
import "./App.css";
import ChatBox from "./Components/ChatBox";
import TopHead from "./Components/TopHead";
import { useState } from "react";



function App() {

  const [headContent,setHeaderContent] = useState("Hello User");
  const upDateHeadText = (headText) =>{
    console.log("Hello User")
     setHeaderContent(headText);
  }
  

  return (
    <div className="App">
      <TopHead headContent={headContent} />
      <ChatBox upDateHeadText={upDateHeadText}/>
      
    </div>
  );
}

export default App;
