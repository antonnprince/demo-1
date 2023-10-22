import React from 'react';
import { useState } from 'react';
import './input.css'


const Field = ({names}) => {

    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("")
    const [phone,setPhone]=useState(0)
    
  return (
    
    <div className="form-container">
    
      <form>

        {names.map((name,index)=>(

        <div className="form-group" key={index}>
          
          <label>
            
            { name === "Phone"?`${name} Number`: `${name} Name`}
            

          </label>
          
          <input type="text" placeholder={name==="Phone"?`Enter your ${name} number`:`Enter your ${name} name`}/>

        </div>
       
        ))}

        <button type='submit' className='submit'>
            SUBMIT  
        </button>
      
      </form>
    
    </div>
  );
};

export default Field;
