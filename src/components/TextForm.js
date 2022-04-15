import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked!" + text);
        if(text.length>0){
           let newText = text.toUpperCase();
           setText(newText)
           props.showAlert("Converted to uppercase!", "success");
        }
        else{
          props.showAlert("Oops! Textbox is empty!", "danger");
        }
    }

    const handleLoClick = () => {
      if(text.length>0){
         let newText = text.toLowerCase();
         setText(newText)
         props.showAlert("Converted to lowercase!", "success");
      }
      else{
        props.showAlert(" Oops! Textbox is empty!", "danger");
      }
    }

    const handleClearClick = () => {
      let newText = "";
      setText(newText)
      props.showAlert("Text has been cleared!", "success");
    }

    const handleReverseClick = () => {
         let newText;
         if(text.length>0){
            for (var i = text.length - 1; i >= 0; i--) {
               newText += text[i];
            }
           setText(newText)
           props.showAlert("Text has been reversed!", "success");
        }
        else{
          props.showAlert("Oops! Textbox is empty!", "danger");
        }
    }

    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () => {
     // let newText;
          //console.log("I am copy");
          var text = document.getElementById("myBox");
          text.select();
          text.setSelectionRange(0, 9999);
          navigator.clipboard.writeText(text.value);
          props.showAlert("Copied to clicboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");
    }

    
    
    const [text, setText] = useState('');
    //text = "new text"; Wrong way to change the state
    //setText("New text"); Correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
         <h2>{props.heading} </h2>
         <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} 
            style={{backgroundColor: props.mode==='dark' ? 'gray' : 'white', 
            color: props.mode==='dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
         </div>
         <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Upppercase</button>
         <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
         <button className='btn btn-primary mx-1' onClick={handleReverseClick}>Reverse text</button>
         <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear text</button>
         <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy to Clipboard</button>
         <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
      <h1>Your text summary</h1>
      <p>{(text.split(" ").length)} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox to preview here!"}</p>
    </div>
    </>
  )
}
