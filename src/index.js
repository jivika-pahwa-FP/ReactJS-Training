import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import AppComponent from "./AppComponent";
import EmployeeCountComponent from "./EmployeeCountComponent";
import rootReducer from './Reducer/index';


var globalStore = createStore(rootReducer);

ReactDOM.render(
    (<>
        <Provider store={globalStore}>
            <AppComponent></AppComponent>
        </Provider>
    </>),
    document.getElementById("root"))


