import React, { useEffect} from 'react';

import Home from './Home';
import Checkout from './Checkout1';
import Header from './Header';
import Login from './Login';
import './index.css';
import { auth } from './firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout1 from './Checkout1';
import { useStateValue} from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
const promise = loadStripe('pk_test_51HQEMnFRRV5Q55EF7Xl3dVMEa7reDwa5PTvozIY4ad2WKYrzwgKLn8wMnbwHmOykfZkr3j4K2mPmy5DrjfKRRXhJ00nJF0HBUj');

function App() {
  const[{user}, dispatch] = useStateValue();
  // useEffect
  //piece of code which runs based on a given condition
  useEffect(() =>{
 auth.onAuthStateChanged((authUser) => {
      console.log('The user is >>>', authUser);
      if(authUser){
        //the user in logged in..
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
      else{
        //the user is logged out
        dispatch({
          type:"SET_USER",
          user: null,
        });
      }
    });
 
  },[]);
  return (
    <Router>
 
     <Switch>
         {/* Thisis the default route, / */}
         <Route exact path="/">
         <Header />
           <Home/>
         </Route>

        
        <Route  path="/checkout" >
            { !user ? <Login/> :  <>
              <Header /> 
             <Checkout1/>
             </>
              }
             {/*eleminate above line for cart function n put <Checkout1/> only*/}
        </Route>  
        <Route path="/login">
          <Login/>
       </Route>
       <Route path="/payment">
       <Header />
         <Elements stripe={promise}>
          <Payment />
         </Elements>
        
       </Route>
       <Route path="/orders" >
       <Header /> 
         <Orders/>
       </Route>
     </Switch>

    </Router>
  
  );
}

export default App;
