import './index.css'
import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js/pure"
import Checkout from "./Component/Checkout"
import CheckoutSuccess from './Component/Success'
import CheckoutCancel from './Component/Cancel'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { REACT_APP_STRIPE_KEY } from './Config/config';

const stripe_key = REACT_APP_STRIPE_KEY
const stripePromise = loadStripe(stripe_key)

function App() {
  return (
    <>
    <Elements stripe={stripePromise} >
    <Router>
      <Routes>
      <Route exact path='checkout/' index element={<Checkout />} />
      <Route exact path='checkout/success/' element={<CheckoutSuccess/>} />
      <Route exact path='checkout/failed/' element={<CheckoutCancel/>} />
      </Routes>
     </Router>
    
   </Elements>

    </>
  );
}

export default App;
