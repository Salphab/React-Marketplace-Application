import {BrowserRouter as Router} from 'react-router-dom';
import React from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";
import reportWebVitals from "./reportWebVitals";
import RouterV2 from './routers/RouterV2';
import CategoryGen from './routers/CategoryGen';
import Superstoresroute from './routers/Superstoresroute';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <RouterV2/>
        <CategoryGen/>
        <Superstoresroute/>
    </Router>
    
);

reportWebVitals();