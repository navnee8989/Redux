import  { useState } from 'react'

 const CustomHook = (intval)=> {
        const[inp,setinp]=useState(intval)
       


    
    const handleChange = (event) =>{
   
        setinp((inp)=>({...inp,[event.target.name]:event.target.value}))
        if(event.target.value === ''){
                console.log("value is null plz provide value");
        }
        else{
            console.log("value done");
        }
    }
   

  return {handleChange,inp}
}

export default CustomHook;