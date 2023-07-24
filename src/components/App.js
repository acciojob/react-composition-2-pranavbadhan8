
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

     let[onshow,setOnshow] = useState(false);
 
     function show(){
      setOnshow(true);
     }

     function close(){
      setOnshow(false);
     }

  return (
    <div className="container">
       <div className="model-overlay">
         <button onClick={show}>Show Modal</button>
          
          { onshow === true && <div className="para">
            
              <div className="model-close">
                <button onClick={close}>Close</button>
              </div>
              <div className="model-close">
                  <p>This is The Content of The Modal</p>
              </div>

          </div>           
            }     
      
          
       </div>
    </div>
  )
}

export default App
