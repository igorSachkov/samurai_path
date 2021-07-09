import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import State from "./State"

ReactDOM.render(
  <React.StrictMode>
    <App asideContacts={State.dialogsArray} mainProfile={State.mainProfile}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// class Users {
//   constructor(props) {
//       this.name = props.name
//       this.age = props.age
//       this.avatar = props.avatar
//   }
// }
// let ivan = new Users({name: "ivan", age: 31, avatar: "../../../Images/EvgeniyAva.jpg" })




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

