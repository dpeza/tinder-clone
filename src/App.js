import React from 'react';
import Header from './Header.js'
import './App.css';
import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import TinderCards from "./TinderCards"
import SwipeButtons from './SwipeButtons.js'

function App() {
  return (
    <div className="App">
     
      {/*header*/}
      <Header />
      <Router>
        
        <Switch>
            <Route path= "/chat">
                
            </Route>
            <Route path= "/">
                <TinderCards/>
                <SwipeButtons />
            </Route>
        </Switch>
      </Router>
      {/* Tinder Cards */}
      {/* action buttons */}
      {/* Chat screen 8*/}
      {/* Individual chat screen */}
      

    </div>
  );
}

export default App;
