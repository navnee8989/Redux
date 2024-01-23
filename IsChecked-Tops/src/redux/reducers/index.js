
import { combineReducers } from "redux";
import { AGE_CHECK, CITY_CHECK } from "../actions/actionType";

const initialState = {
  city: false,
  age: false,
};
console.log("reducers Done");
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case CITY_CHECK:
      return {
        ...state,
        city: true,
      };
    case AGE_CHECK:
      return {
        ...state,
        age: true,
      };
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  Data: reducers,
});

export default rootReducers;

