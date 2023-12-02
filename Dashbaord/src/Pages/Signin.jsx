import React, { useState } from 'react';
import './style.scss';
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { saveUser } from '../redux/action/action';
import { Customhook } from '../customhook/Customhook';

const Signin = () => {
  const { handleChange, input } = Customhook();
  const dispatch = useDispatch();



  const saveData = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    await dispatch(saveUser(input));
  };

  return (
    <>
      <div className="box">
        <div className="box-head">
          <FaUserCircle className="icons" />
        </div>
        <div className="box-input">
          <form onSubmit={saveData}>
            <label htmlFor="username">Enter Username</label>
            <input type="text" id="username" name="username" onChange={handleChange} />
            <label htmlFor="email">Enter Email</label>
            <input type="email" id="Email" name="email" onChange={handleChange} />
            <label htmlFor="password">Enter Password</label>
            <input type="password" id="Password" name="password" onChange={handleChange} />
            <div className="btn-two">
              <button className="primary" type="submit">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
