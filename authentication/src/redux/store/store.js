import {  createStore } from '@reduxjs/toolkit'
import rootReducer  from '../reducers/index'


console.log("store done");
const store = createStore(
   
    rootReducer)

export default store
