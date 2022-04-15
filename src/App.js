//import logo from './logo.svg';
//import { useState } from 'react';
//import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
//import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react'
//import {
  //BrowserRouter as Router,
  //Routes,
  //Route,
  //Link
//} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");//whether darkmode is enabled or not
  const [alert, setAlert] = useState(null);
  //const [mode1, setMode1] = useState(null);//whether greenmode is enabled or not

  const showAlert = (message, type) => {
         setAlert({
           msg: message,
           type: type
         })
         setTimeout(() => {
             setAlert(null);
         }, 2000);
  }

  


  const newToggleMode = () => {
      if(mode === "light"){
          setMode("dark");
          document.body.style.backgroundColor = "green";
          showAlert("Green mode has been enabled", "success");
          document.title = "TextUtils - Greenmode";
      }
      else{
        setMode("light");
        document.body.style.backgroundColor = "yellow";
        showAlert("Green mode has been enabled", "success");
        document.title = "TextUtils - Yellowmode";
      }
  }

  const toggleMode = () => {
       if(mode === "light"){
            setMode('dark');
            document.body.style.backgroundColor = "#042743";
            showAlert("Dark mode has been enabled", "success");
            document.title = "TextUtils - Darkmode";
           // setInterval(() => {
             //  document.title = "TeXTUtils is superb";
            //}, 2000);
            //setInterval(() => {
              //document.title = "TextUtils is amazing";
            //}, 1500);
       }   
       else{
           setMode('light');
           document.body.style.backgroundColor = "white";
           showAlert("Light mode has been enabled", "success");
           document.title = "TextUtils - Lightmode";
      }   
  }

  return (
    <>
     {/*<Router>*/}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} newToggleMode={newToggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
        {/*<Routes>
          <Route exact path="/about" element={<About />} />
            {/*<About />
          //</Route>*/}
          {/*<Route exact path="/" element={<TextForm  showAlert={showAlert} 
          heading="Enter the text to analyze below" mode={mode} />}/>*/} 
            <TextForm  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          {/*</Route>
        </Routes>*/}
       </div>
       {/*</></Router>*/}
    </>
  );
}

export default App;
