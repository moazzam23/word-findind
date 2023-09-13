
import React, { useState } from 'react'

export default function InpuTform(props) {
    const handleUpClick=()=>{
        let newtext=text.toUpperCase(); 
      // newtext=text.toLowercase();
      
        
        settext(newtext);
        
    }
    const handleONClick=()=>{
        let newtext=text.toLowerCase(); 
      // newtext=text.toLowercase();
      
        
        settext(newtext);
    }
    const handleONclear=()=>{
        let newtext=''; 
      // newtext=text.toLowercase();
      
        
        settext(newtext);
    }
    const handleONtoggle=()=>{
        let newtext=text.charAt(0).toUpperCase() +text.slice(1);  
      // newtext=text.toLowercase();
      
        
        settext(newtext);
    
    }
    const handleoncopy=()=>{
        var text = document.getElementById("Inputbox");

    
        text.select();
        navigator.clipboard.writeText(text.value);

    }
    const handleextraspace=()=>{
        let newtext=text.split(/[ ]+/)  ;  
      // newtext=text.toLowercase();
     
        
        settext(newtext.join(" "));

    }
    const handleextraword=()=>{
        let a =prompt("enter the statement wnats to include: ")
        let newtext=text.includes(a); 
        document.getElementById("Inputbox").innerHTML = newtext; 
      // newtext=text.toLowercase();
     
        
        settext(newtext);

    }
    const handleOnChange=(event)=>{
        settext(event.target.value)

    }


    const [ text,settext]= useState('')
  return (
    <>
  <div className={`container text-${props.mode ==="light"? 'dark':'light'}`}>  
  <h1>{props.heading}</h1>
  <div className= "mb-3"/>
  <textarea className="form-control" value={text}  onChange={handleOnChange} id="Inputbox" rows="6"></textarea>
</div>


<div className="mb-3"/>
<div className='container '>
<button className="btn btn-primary mx-2 border border-dark"  onClick={handleUpClick}>Upper Case</button>
<button className="btn btn-primary mx-2 border border-dark" onClick={handleONClick}>Lower Case</button>
<button className="btn btn-primary mx-2 border border-dark" onClick={handleONtoggle}>First Case</button>
<button className="btn btn-primary mx-2 border border-dark" onClick={handleONclear}>clear text</button>
<button className="btn btn-primary mx-2 border border-dark" onClick={handleoncopy}>copy text</button>
<button className="btn btn-primary mx-2 border border-dark" onClick={handleextraspace}>Remove Extra text</button>
<button className="btn btn-primary mx-2 border border-dark" onClick={handleextraword}>ADD Extra text</button>
{/*<button className="btn btn-primary" type="submit" onClick={handleupclick}>Spell Checker</button>*/}

</div>
<div className='mb-3'/>
<div className='container  bg-dark text-light'  >
    <h2> Text History</h2>
<p> {text.length} Charcter and {text.split(" ").length } Words</p>
<h2>  Preview of entered text</h2>
<p> {text} </p>
</div>
</>
  )
}
