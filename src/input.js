import React from 'react';
import { useState,useEffect } from 'react';
import './input.css'


const Field = () => {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const [phone,setPhone]=useState(0);
    const[loc,setLoc] = useState("");

    const handleSubmit=(e)=>{
     
      e.preventDefault();

      if(!name||!email||!phone||!loc){
        alert('All fields are required');
        return;
      }  
    };

    const checkPhone=()=>{
      if (phone && Object.values(phone).every((no)=>isNaN(no)))
       {
          alert('Enter valid phone no')
        }

        else if(phone && Object.values(phone).length!==10){
          alert('Enter valid phone no')
        }
    }

    


  return (
    
    <div className="form-container">
    
      <form onSubmit={handleSubmit}>
       
        <div className="form-group">
          
          <h3>Company Name</h3>
            <input type="text" placeholder="Company name"
              onChange={(e)=>(setName(e.target.value))}
            />
            
            <h3>Location</h3>
            <input type="text" placeholder="Location"
              onChange={(e)=>(setLoc(e.target.value))}
            />

            <h3>Phone number</h3>
            <input type="text" placeholder="Phone number"
              onChange={(e)=>(setPhone(e.target.value))}
            />
            
            <h3>Email</h3>
            <input type="text" placeholder="abcd@something.com"
                onChange={(e)=>(setEmail(e.target.value))}
            />
          
        </div>

        <button type='submit' className='submit' 
        onClick={checkPhone}>
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
