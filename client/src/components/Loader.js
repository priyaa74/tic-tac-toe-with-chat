import React, { useEffect,useState } from 'react';


export default function Loader(){
    // const {bgcolor,completed}= props;
    const[completed,setCompleted]= useState(0);

    useEffect(()=>{
      setInterval(()=>
        setCompleted(Math.floor(Math.random()*100)+1),800)
    },[])

    const bigDiv={
    height:'30px',
    width:'100%',
    backgroundColor:'#e0e0de',
    borderRadius: '30px',
    margin:' 50px auto'
    }

  const fillers = {
    height: '100%',
    width: `${completed}%`,
    // backgroundColor: "rgb(192, 240, 228)",
    backgroundImage: "linear-gradient(to right, #84fab0 0%, #8fd3f4 51%, #84fab0 100%)",
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out'
  }

  const labels = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

    return(
        <div style={bigDiv}>
        <div style={fillers}>
        <span style={labels}>...</span>
        </div>
        </div>
    )
};