import React from 'react';

import Home from './Home';
import Checkout from './Checkout1';
import Header from './Header';
import './index.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout1 from './Checkout1';
function App() {
  return (
    <Router className="app">
    <Header />
     <Switch>
       <Route path="/Home" component={Home}/>
           <Route path="/checkout" >
            <Checkout1/>
          </Route>
            <Route path="/login">
         <h1> Login Page</h1>
       </Route>
       {/* Thisis the default route, / */}
      
      
     </Switch>

    </Router>
  
  );
}

export default App;
