import React, {useState} from "react";

export default function Textform(props) {
  const[text, setText] = useState(''); 
  const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleOnClickUp = (event) =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnClickLow = (event) =>{
      let newText = text.toLowerCase();
      setText(newText);
  }
  return (
    <>
    <div className="container my-2">
      <textarea className={`form-control bg-${props.mode==='dark'?'dark':'light'}`} id="exampleFormControlTextarea1" rows="8" 
      value={text} onChange={handleOnChange} 
      style={props.mode==='dark'?{color:'white'}:{color:'black'}}
      ></textarea>
      <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleOnClickUp}>Connvert to Uppercase</button>
      <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleOnClickLow}>Connvert to Lowercase</button>
    </div>
    <div className="container" style={props.mode==='dark'?{color:'white'}:{color:'black'}}>
      <h2>Your text summary:</h2>
      {/* <p >{text.split(" ").length} words and {text.length} characters</p> */}
      <p >{text.length===0?0:(text.endsWith(" ")?text.trim():text).split(" ").length} words and {text.length} characters</p>
      <p >{(1/125)*(text.split(" ").length)} minutes to read</p>
      <h2 >Your preview:</h2>
      <p >{text}</p>
    </div>
    </>
  );
}
