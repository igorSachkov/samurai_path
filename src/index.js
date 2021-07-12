import StateObj from "./redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addDialogMessage, updateDialogTextArea, subscriber} from "./redux/State";
import './index.css';



let reRender = (props)=> {
    ReactDOM.render(
      <React.StrictMode>
        <App state={props} addDialog={addDialogMessage} updateDialogTextArea= {updateDialogTextArea}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }


subscriber(reRender)
reRender(StateObj)




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

