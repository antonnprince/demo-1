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
        alert('Please enter valid inputs. All fields are required');
        return;
      }  

      else if(phone.values.every((no)=>isNaN(no))){
          alert('Please enter valid phone number');
      }

      else if(phone.values.length>10){
        alert('Please enter valid phone number');

      }
    };

    


  return (
    
    <div className="form-container">
    
      <form>
       
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

        <button type='submit' className='submit'  onClick={handleSubmit}>
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
