import React from 'react';
import './style.scss';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Customhook} from '../customhook/Customhook'

const LoginPage = () => {
  const Navigate = useNavigate();
  const {handelChange} = Customhook();

const handleredirect =()=>{
  Navigate('./signin')
}

  return (
    <>
      <div className="box">
        <div className="box-head">
          <FaUserCircle className="icons" />
        </div>
        <div className="box-input">
          <form>
            <label htmlFor="email" >Enter Email</label>
            <input type="email" id="Email" onChange={handelChange} name='email'/>
            {/* {error} */}
            <label htmlFor="password">Enter Password</label>
            <input type="password" id="Password" onChange={handelChange} name='password'/>
            <div className="btn-two">
              <button className="primary">Log in</button>
            </div>
            <span>Don't have an account</span>
            
              <b onClick={handleredirect}  className='Signin'>Sign in</b>
           
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
