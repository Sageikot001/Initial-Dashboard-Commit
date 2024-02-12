import React from "react";
import ReactDOM from "react-dom";
import { SiShopware } from 'react-icons/si';


import './index.css';
import App from './App';
import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.render(
    <ContextProvider>
    <App />
    </ContextProvider>,
    document.getElementById('root')
    );