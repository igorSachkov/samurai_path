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
import {Provider} from "react-redux"
import UsersContainer from './Content/Users/UsersContainer';
import { Login } from './Content/Login/Login';


function App(props) { 

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

export default App;

