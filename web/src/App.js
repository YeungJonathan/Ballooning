import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
import Home from './components/Home';
import './css/MainStyle.css';
import NavBar from './components/NavBar';
import {observer} from 'mobx-react';
import appStore from './stores/AppStore';

@observer
class App extends React.Component{

  renderMainContent(){
    const {currentPage} = appStore;
    switch(currentPage){
      case "Main":
        return <Home />
      default:
        return <Home />
    }
  }

  render() {
    return (
      // <Router>
        <div className="container">
          <NavBar />
          {this.renderMainContent()}
          {/* <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch> */}
        </div>
      // </Router>
    );
  }
}

export default App;