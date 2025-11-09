import React,{useState} from 'react'




export default function TextForm(props) {


    const handleUpClick=(e)=>{
        // console.log("Uppercase was clicked"+text)
        setText(text.toUpperCase());
    }

     const handleOnChange =(e)=>{
        // console.log("Uppercase was clicked"+text)
        setText(e.target.value);

    }
const handleAlClick =(e)=>{
      let newText="";

      for(let i=0;i<text.length;i++){
        newText+=i%2===0?text[i].toUpperCase():text[i].toLocaleLowerCase();
      }
      setText(newText);

        

    }
    const[text,setText]=useState(" Enter text here");  
  return (


    <>
<div>

<h1>{props.heading}</h1>

<div className="mb-3 mx-3">
<textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleAlClick}>AlTeRnAtInG cAsE</button>
</div>

<div className="container">

{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters 
<p >{0.008*text.split(" ").length } min to read</p>
</div>

</>
  )
}
