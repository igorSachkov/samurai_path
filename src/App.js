import './App.css'
import HeaderClass from "./Content/Header/HeaderClass"
import NavAside from './Content/NavAside/NavAside';
import ProfileCardContainer from './Content/MainContent/ProfileCard/ProfileCardContainer';
import DialogsContainer from './Content/MainContent/Dialogs/DialogsContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './Content/MainContent/News/News';
import Music from './Content/MainContent/Music/Music';
import Settings from './Content/MainContent/Settings/Settings';
import MobileFooter from './Content/MobileFooter/MobileFooter';
import { connect, Provider } from "react-redux"
import UsersContainer from './Content/Users/UsersContainer';
import { LoginAuth as Login } from './Content/Login/Login';
import React, { useState, useEffect } from 'react';
import { initializeApp } from './redux/appReducer';
import Preloader from './Content/Common/Preloader';

const App = (props) => {
  useEffect(() => {
    props.initializeApp()
  });

  if (!props.initialized) {
    return <Preloader />
  }

  return (

    <BrowserRouter>
      <Provider store={props.store}>
        <div className="wrapper">
          <HeaderClass />
          <NavAside></NavAside>
          <div className="main-container">
            <Route path="/profile/:userId" render={() => <ProfileCardContainer />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </div>
          <div className="mobile-footer">
            <MobileFooter ></MobileFooter>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}


const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }

}
export default connect(mapStateToProps, { initializeApp })(App);

