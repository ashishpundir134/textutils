import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert ("Converted into UpperCase" , "scuccess");
  };
  const handleLoClick = () => {
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert ("Converted into LowerCase" , "scuccess");
  };
  const clearText = () => {
    // console.log("Your text is cleared");
    let newText = ("");
    setText(newText);
    props.showAlert ("Text has been cleared" , "scuccess");

  };

  const copyText = () => {
    // console.log("Your text is copied);
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert ("Text has been copied" , "scuccess");

  };

  const handleExtraSpaces = () => {
    // console.log("Extra spaces are cleared");
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
      props.showAlert ("Extra spaces has been cleared" , "scuccess");

  };

  const handleCapitalize = () => {
    let newText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
    setText(newText);
      props.showAlert ("Words has been capitalized" , "scuccess");

  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style= {{ color: props.mode === 'dark'?'white':'black'}}> 
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style= {{backgroundColor: props.mode === 'dark'?'#9fc5dc':'white' , color: props.mode === 'dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={copyText}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCapitalize}>Capitalize Words</button>

      </div>
      <div className="container my-3" style= {{ color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element) => { return (element.length != 0)}).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element) => { return (element.length != 0)}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : 'Enter your text here  to see preview' }</p>
      </div>
    </>
  );
}
