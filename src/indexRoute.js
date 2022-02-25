import ReactDom from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React  from 'react';
// import './App.css';
import FirstSPAComponent from './SinglePageApplication/FirstSPAComponent';


ReactDom.render(<FirstSPAComponent></FirstSPAComponent>,document.getElementById("root"))
