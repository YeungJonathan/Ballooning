import React from "react";
import Home from './components/Home';
import './css/MainStyle.css';
import NavBar from './components/NavBar';
import {observer} from 'mobx-react';
import appStore from './stores/AppStore';
import headerLogo from './assets/header_logo.png';

@observer
class App extends React.Component{

  renderMainContent(){
    const {currentPage} = appStore;
    switch(currentPage){
      case "Main":
        return <Home />
      case "About":
        return <h1>About</h1>
      default:
        return <Home />
    }
  }

  render() {
    return (
        <div className="container">
          
          {/* header div */}
          <div>
            <div>
              <img src={headerLogo} alt="logo"/>
            </div>
            <div className="empty-div"/>
          </div>

          {/* body div */}
          <div className="empty-div">
            <div className="navbar-div">
              <NavBar />
            </div>
            <div className="empty-div">
              {this.renderMainContent()}
            </div>
          </div>

          {/* footer div */}
          <div style={{"flex":0.5}}>

          </div>

        </div>
    );
  }
}

export default App;