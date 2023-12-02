import { useState } from 'react'

export   const Customhook= (intialstate={FormData: ""},initialerror)=>{
        const [input,setinput]=useState(intialstate)
        const[error,seterror]=useState(initialerror)
const handelChange =(event)=>{
    setinput((input)=>({...input.FormData,[event.target.name]:event.target.value}))
    if(event.target.value == ""){
        seterror("Value is null")
    }else if(event.target.value.length === 6){
        seterror('Plz Provide 8 number ')
    }else{
        console.log("success");
    }

}
return {handelChange,error,input}
}

