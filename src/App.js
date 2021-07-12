import './App.css'
import Header from "./Content/Header/Header"
import NavAside from './Content/NavAside/NavAside';
import ProfileCard from './Content/MainContent/ProfileCard/ProfileCard';
import Dialogs from './Content/MainContent/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './Content/MainContent/News/News';
import Music from './Content/MainContent/Music/Music';
import Settings from './Content/MainContent/Settings/Settings';
import MobileFooter from './Content/MobileFooter/MobileFooter';

function App(props) {
  
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header></Header>
        <NavAside></NavAside>
        <div className="main-container">
          <Route path="/profile" render={()=> <ProfileCard profilePage={props.store.state.profilePage}/>} />
          <Route path="/dialogs" render={()=> <Dialogs store={props.store}/>} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
        <div className="mobile-footer">
          <MobileFooter ></MobileFooter>
        </div>

      </div>
    </BrowserRouter>



  );
}

export default App;

