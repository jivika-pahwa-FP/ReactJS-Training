import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import flightReducer from "./flightReducer";

const rootReducer = combineReducers({
    employees : employeeReducer,
    flights : flightReducer
});


export default rootReducer;
