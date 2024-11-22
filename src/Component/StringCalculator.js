

import React, { useState } from 'react';


export default function NewComp() {
 const [inputVal, setInputVal] = useState("")
 const [addition, setAddition] = useState(0)

 const handleChange = (e) => { // console.log(e.target.value); 
    setInputVal(e.target.value) 
}
 
    const handleClck = () => {
         console.log(inputVal,typeof(inputVal)); 
         if (inputVal) { 
            const arr = inputVal.split(/[\\n,]/);
            console.log(arr);
             let res = add(arr)
             setAddition(res)
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
         <button variant='outlined' onClick={handleClck}>Add</button>
         <button variant='outlined' onClick={()=>setInputVal("")}>Clear</button>
         <div>
            Total Addition of input fields number is {addition}
         </div>
          </div> 
          )
        }




        