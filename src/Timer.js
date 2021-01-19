import React from 'react';
import "./App.css"
function Timer() {

const [mins,setMins] = React.useState(0);
let [secs,setSecs] = React.useState(0);

let [start,setStart] = React.useState(false);
let [reset,setReset] = React.useState(false);

// function convertTo2Dec (time){
//  return (parseInt(time)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
// }



React.useEffect(() => {


  if (reset){

    setReset(false);
    setStart(false);
    setMins(0);
    setSecs(0);
  }
  


  if (start){
  
 
  const interval = setInterval(() => {

    if ( secs< 59){
        setSecs(secs+1)
   
  }
  else{
    setSecs( 0);
    // setMins(convertTo2Dec((parseInt(mins) + 1).toString()))
    setSecs(0)
    setMins(mins+1)

  }


  }, 1000);


  return () => clearInterval(interval);
}

}, [secs,start,reset,mins]);



  return (
    
    <div id = "wrapper" style={{display:"flex",justifyContent:"center",alignItems:"center",
    height:"100vh",backgroundColor:"grey"
    }}>

      
    
    <div style={{border:"2px solid blue",padding:"30px",textAlign:"center",backgroundColor:"blueviolet",
    borderRadius:"50px 50px 50px 50px"}}>
        <h1 style={{color:"black",fontSize:"60px"}}>TIMER APP</h1>
    <div id = "displayContainer"  data-testid = "DisplayTime" style={{padding:"40px"}}>
          
         <h1 style={{color:"red",fontSize:"45px",fontWeight:"bold",backgroundColor:"blueviolet"}}> {` ${mins} : ${secs}`}</h1>
      
       </div>







         <div id = "buttonsContainer" style={{display:"flex",padding:"35px"}} >
             <div> <button style={{
               backgroundColor:"black",marginLeft:"6px",padding:"15px",fontSize:"27px",color:"red",borderRadius:"50px 50px 50px 50px"}}  data-testid="start" className = "buttons"onClick = {()=>{setStart(true)}} >Start</button></div>
            <div> <button style={{
              backgroundColor:"black",marginLeft:"6px",padding:"15px",fontSize:"27px",color:"red",borderRadius:"50px 50px 50px 50px"}} className = "buttons" onClick = {()=>{setStart(false)}}>Stop</button></div>
    <div>         <button  style={{
      backgroundColor:"black",marginLeft:"6px",padding:"15px",fontSize:"27px",color:"red",borderRadius:"50px 50px 50px 50px"}} className = "buttons" onClick = {()=>{setReset(true)}} >Reset</button>   </div>
       </div>
   
    </div>
    
    
    
    
    </div>
  );
}

export default Timer;

