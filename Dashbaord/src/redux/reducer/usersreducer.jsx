import { RETRIVE_ALL_USERS } from "../action/type";

const initialstate = {}


const Userreducer = (users=initialstate,action)=>{
    const {type,payload}= action
    switch(type){
        case RETRIVE_ALL_USERS:
            console.log('retrive all data');
            return {...payload}
        default:
            return users 

        }

}
export const selectuser = (state)=>state.users
export default Userreducer;