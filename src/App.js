
import "./App.css";
import ChatBox from "./Components/ChatBox";
import TopHead from "./Components/TopHead";
import { useState } from "react";
import {Modal,ModalHeader,ModalBody} from "reactstrap";


function App() {

  const [headContent,setHeaderContent] = useState("Hello User");
  const upDateHeadText = (headText) =>{
    console.log("Hello User")
     setHeaderContent(headText);
  }
  const [model,setModel] = useState(false);
  

  return (
    <div className="App">
      <Modal
  
        isOpen = {model}
        toggle = {()=> setModel(!model)}
        style = {
          {
            width:"25%"
          }
        }
      >
          <ModalHeader
             toggle = {()=> setModel(!model)}
             centered
                className="align-items-center w-100"
          ><button type="button" class="btn-close invisible" data-bs-dismiss="modal"></button>
            <span className="flex-grow-1 text-center">
            Sign Up
            </span>
          </ModalHeader>
          <ModalBody className="d-flex flex-column">
            <input style={{
              padding: "0.4rem 0.6rem",
              margin: "0.8rem",
              border: "2px solid black",
              boxShadow: "2px 0px 2px grey, 0px 2px 2px grey",
              borderRadius: "13px",
              }           
            }placeholder="Enter Your Email"/> 
            
            <input style={{
              padding: "0.4rem 0.6rem",
              margin: "0.8rem",
              border: "2px solid black",
              boxShadow: "2px 0px 2px grey, 0px 2px 2px grey",
              borderRadius: "13px",
              }           
            } placeholder="Enter Your Password"/> 
            <div className="d-flex container justify-content-center align-items-center">
              <button className="btn btn-primary btn-sm">Sign In</button>
              
            </div>
          </ModalBody>
      </Modal>
      <TopHead headContent={headContent} />
      <ChatBox upDateHeadText={upDateHeadText}/>
      <button className="btn btn-primary m-1" onClick={()=>setModel(true)}> Login/SignUp</button>
    </div>
  );
}

export default App;
