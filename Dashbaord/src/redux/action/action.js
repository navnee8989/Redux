import http from "../../http";
import UserService from "../service/index";
import { RETRIVE_ALL_USERS } from "./type";

export const retriveUser =()=>async(dispatch)=>{
    console.log("inside retriveUser");
    const ResData = await UserService.getallUser();
    return dispatch({type:'RETRIVE_ALL_USERS',payload:ResData["data"]})
}
export const saveUser = ()=>async(dispatch)=>{
    console.log("inside SaveUser");
    const Resdata = await UserService.insertnewUser();
    return Resdata
}
export const loginUser=()=>async(dispatch)=>{
    console.log('Inside Login User');
    const ResData = await UserService.loginUser();
    return ResData
}