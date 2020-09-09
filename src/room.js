import React, { useState } from 'react';
import './index.css';

function Room(){

    let [isLit, setLit] = React.useState(true);
    let [age, setAge]= React.useState(24);
    let [lighton , setlighton]=useState(false);



        function UpdateLit(){
            console.log("button clicked");
             setLit(!isLit);
            }
        function IncreaseAge(){
             console.log("button clicked");
             setAge(age++);
            }
        function ONlit(){
            console.log("on the spot light")

            setlighton(!lighton);


        }
        
  return(
    <div>
      this is room {isLit? "lit":"dark"}
      <br />
      Age: {age}
      <br />
      <button onClick={UpdateLit}>toggle light</button>
      <br />
      <button onClick={IncreaseAge}>increse age</button>
      <br />
       {lighton? "ON" : "off"}
      <button onClick={ONlit}>click to ON OR oFF the light</button>
      
  </div>
  );
  
}

export default Room;