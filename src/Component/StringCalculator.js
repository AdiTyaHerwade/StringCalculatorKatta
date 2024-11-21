

import React, { useState } from 'react';


export default function NewComp() {
 const [inputVal, setInputVal] = useState("")

 const handleChange = (e) => { // console.log(e.target.value); 
    setInputVal(e.target.value) 
}
 
    const handleClck = () => {
         console.log(inputVal); 
         if (inputVal) { 
            const arr = inputVal.split(/[\n,]/)
             let res = add(arr)
              console.log(res);
             } else { 
                console.log("No Input To Calculate");
             } }
 
    const add = (arr) => {
         let total = 0
          arr.map(val => {
             if (!isNaN(val)) { 
                try { 
                    if (Number(val) < 0) {
                         throw new Error(`Negative numbers are not allowed. ${val}`) 
                        } 
                        total += Number(val)
                     } catch (error) { 
                        console.error("Error:", error.message);
                     }
 } else {
     console.log(val, "is not a number"); 
    } })
     return total }
 return (
     <div>
         <input type='text' onChange={handleChange} value={inputVal}  sx={{ margin: "2px", }} label={"user input"} /> 
         <button variant='outlined' onClick={handleClck}>OnClk</button>
          </div> 
          )
        }


