import http from "../../http";

const getallUser =()=>{
    console.log("indise getalluser");
    return http.get('users')
}
const insertnewUser =()=>{
    console.log("inside Insertneruser");
    return http.post('users')
}

const loginUser = (username,password)=>{
    console.log("inside LoginUser");
    return http.get(`users?username=${username}&password=${password}`)
}

const UserService = {
    getallUser,
    insertnewUser,
    loginUser
}

export default UserService;