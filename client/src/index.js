import React from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {Route, BrowserRouter, Switch} from 'react-router-dom'

import CheckoutForm from './components/CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_i7bJE84QP11alRDH8lY2Twkw00Jl1wYTZb");

function App() {
  return (
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CheckoutForm} />
        </Switch>
      </BrowserRouter>
    </Elements>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));