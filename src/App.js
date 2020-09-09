import React, { useState } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import Parent from './parent';
//import Room from './room';
//import Themecontext from './ThemeContext'

function App(){
  let [number, setNumber] =React.useState(45);
  return (
    <div>
      Hello world
      <Parent num ={number}></Parent>
      <button onClick={()=>{setNumber(number++)}}>update number</button>  
    </div>
  );
}



/*function App(){
  const themeHook = useState("light");
  return(
    <Themecontext.Provider value ={themeHook}>
      <div>
      <Header />
       <Main />
      

      </div>
    </Themecontext.Provider>
  );
}
*/
export default App;
