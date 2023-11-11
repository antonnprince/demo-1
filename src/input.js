import React from 'react';
import { useState, useEffect } from 'react';
import './input.css';
import axios from 'axios';
import QRCode from 'react-qr-code';


const Field = () => {

    useEffect(()=>{
    axios.get(getUsers).then((res)=>{
      setData(res)
    })
      },[])
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const [phone,setPhone]=useState(0);
    const[loc,setLoc] = useState("");
    const[setData,data] = useState([]);
    const[code,getCode]=useState(false);
 
    const getUsers = 'https://bontypetee.execute-api.ap-south-1.amazonaws.com/test?collection=merchants&action=create'

    const sendUsers = 'https://bontypetee.execute-api.ap-south-1.amazonaws.com/test?collection=merchants&action=read_all'

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
          alert('Enter valid phone number')
        }

        else if(phone && Object.values(phone).length!==10){
          alert('Enter valid phone number')
        }
    }

    


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

        <button type='submit' className='submit' 
          onClick={checkPhone}>
            SUBMIT  
        </button>
        
        <button className='submit' onClick={()=>{getCode(!code)}}>
            RETRIEVE USER   
        </button>
        
      </form>
<div class='qr'>

{
  code&& 
  <>
    {name}
    <QRCode
      title="QR code"
      value={name}
      bgColor='#FFFFFF'
      fgColor='#000000'
      size = {256}
    />
  </>
                    
}

</div>
    
    </div>
  );
};

export default Field;
