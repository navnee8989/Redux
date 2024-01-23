import { CITY_CHECK, AGE_CHECK } from "./actionType";


console.log("actions Done");
export const cityCheck = (data) => ({
  type: CITY_CHECK,
  payload: data,

});

export const ageCheck = (data) => ({
  type: AGE_CHECK,
  payload: data
});