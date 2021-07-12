import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import State from "./redux/State";
import {addDialogMessage} from "./redux/State";
import './index.css';


export let reRender = ()=> {
    ReactDOM.render(
      <React.StrictMode>
        <App state={State} addDialog={addDialogMessage}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }