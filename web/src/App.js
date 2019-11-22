import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import observer from 'mobx-react';

@observer
class App extends React.Component{

  render() {
    return (
      // <Router>
        <div style={{display:"flex"}}>
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
