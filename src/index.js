import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DialogProfiles from "./Content/MainContent/Dialogs/DialogsSideBar/DialogProfiles/DialogProfiles"



let dialogsArray = [
  {id: "1", avatar:  "ava", name: "Кирилл", status: "online" },
  {id: "2", avatar:  "ava", name: "Анастасия", status: "online" },
  {id: "3", avatar:  "ava", name: "Филипп", status: "offline" },
  {id: "4", avatar:  "ava", name: "Григорий", status: "online" },
  {id: "5", avatar:  "ava", name: "Артем", status: "online" }
]
let dialogsArrayOut = dialogsArray.map( (el)=> {
  return (<DialogProfiles id={el.id} avatar ={el.avatar} name={el.name} status={el.status}  />)
})


ReactDOM.render(
  <React.StrictMode>
    <App asideContacts={dialogsArrayOut}/>
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

