import React from 'react';
import { useState } from 'react';
import './input.css'


const Field = () => {

    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const[email,setEmail]=useState("");
    const [phone,setPhone]=useState(0);
    
  return (
    
    <div className="form-container">
    
      <form>
       
        <div className="form-group">
          
          <h3>First Name</h3>
            <input type="text" placeholder="First name"
              onChange={(e)=>(setFname(e.target.value))}
            />
            
            <h3>Last Name</h3> 
            <input type="text" placeholder="Last name"
              onChange={(e)=>(setLname(e.target.value))}
            />
            
            <h3>Phone number</h3>
            <input type="text" placeholder="Phone number"
              onChange={(e)=>(setPhone(e.target.value))}
            />
            
            <h3>Email id</h3>
            <input type="text" placeholder="abcd@something.com"
                onChange={(e)=>(setEmail(e.target.value))}
            />
          
        </div>

        <button type='submit' className='submit'
        onClick={()=>{
          setEmail("");
          setFname("");
          setLname("");
          setPhone("");
        }}
        >
            SUBMIT  
        </button>
        
        <button type='submit' className='submit'>
            RETRIEVE USER   
        </button>
      
      </form>
    
    </div>
  );
};

export default Field;
