import React from 'react'
import "./CustomButton.css"
function CustomButton() {
    let flag=true;
    const textFunction=()=>{
        const parag= document.querySelector(".textP")
if (flag){
    parag.style.display="block"
}else {
    parag.style.display="none"
}
flag=!flag
    }
    const warningFunct=()=>{
        alert('Warning');
        document.getElementById("warning").style.border="2px solid red"
    }
    const hintFunction=()=>{
        let hintValue= document.querySelector(".textP")
// console.log(hintValue);
        if (flag){
            hintValue.style.fontStyle= "italic"    
hintValue.style.display="inline"

        }else {
                hintValue.style.display="none"            
        }
flag=!flag


    }
  return (
    <div className='container'>
    <div className='custom'>
        <button onClick={textFunction} id='text'>Text</button>
        <br />  <br />
        <button onClick={warningFunct} id='warning'>Warning</button>
        <br /><br />
        <button onMouseOver={hintFunction} onMouseOut={hintFunction} id='hint'>Hover</button>
    </div>
    <div className='myp'>
        <p className='textP'>It works!!!</p>
        {/* <p className='hoverP'>it works too</p> */}

    </div>
    </div>
  )
}

export default CustomButton