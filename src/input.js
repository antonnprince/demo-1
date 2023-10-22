import React from 'react';
import './input.css'


const Field = ({names}) => {

    
  return (
    
    <div className="form-container">
    
      <form>
        {names.map((name,index)=>(

        <div className="form-group" key={index}>
          
          <label>
            
            { name === "Phone"?`${name} Number`: `${name} Name`}

          </label>
          
          <input type="text" id="first-name" placeholder={`Enter your ${name} name required `}/>

        </div>
       
        ))}
      
      </form>
    
    </div>
  );
};

export default Field;
