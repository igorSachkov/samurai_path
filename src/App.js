import './App.css'
import Header from "./Content/Header/Header"
import NavAside from './Content/NavAside/NavAside';
import ProfileCardContainer from './Content/MainContent/ProfileCard/ProfileCardContainer';
import DialogsContainer from './Content/MainContent/Dialogs/DialogsContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './Content/MainContent/News/News';
import Music from './Content/MainContent/Music/Music';
import Settings from './Content/MainContent/Settings/Settings';
import MobileFooter from './Content/MobileFooter/MobileFooter';
import {Provider} from "react-redux"


function App(props) {

  return (
    <BrowserRouter>
      <Provider store={props.store}>
        <div className="wrapper">
          <Header></Header>
          <NavAside></NavAside>
          <div className="main-container">
            <Route path="/profile" render={() => <ProfileCardContainer />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
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

