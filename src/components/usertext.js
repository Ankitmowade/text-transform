import React,{useState} from "react"
import "./usertext.css"
const UserText=()=>{
    const [text,settext]=useState("Type something..");
    
    
    const EventHandler=()=>{
        console.log("cliked on button");
        let newText=text.toUpperCase();
        settext(newText);
    }
    const EventHandler1=()=>{
        console.log("cliked on button");
        let newText1=text.toLowerCase();
        settext(newText1);
    }
   const EventHandler2=()=>{
        console.log("cliked on button");
        let newText2="";
        settext(newText2);
    }
    const onChangeHandler=(event)=>{
        console.log("onchnage");
        settext(event.target.value);
    }
	
    return(
        <div><h1 style={{color:"red"}}>Enter the Text to Anaylse below</h1>
        <textarea className="input" placeholder="Type Something.." onChange={onChangeHandler} value={text}></textarea><br></br>
        <div className="button">
        <button className="btn" onClick={EventHandler} >Convert ToUpperCase</button>
        <button className="btn1" onClick={EventHandler1} >Convert ToLowerCase</button>
        <button className="btn" onClick={EventHandler2} >Clear</button>
        </div>
        
        <div className="second">
            <h4>There are <span>{text.split(" ").length}</span>  Words And <span>{text.length}</span> Length of Upper Paragraph.</h4>
            <h1>Text Summary</h1>
            <p className="p">{text}</p>
        </div>
        </div>
        
    );

}
export default UserText;