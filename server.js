const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const stripe = require('stripe')('sk_test_jAHx2dvccyLJhLPBy1VQXDR5000TFLC0rr', {apiVersion: ''});

app.get("/public-key", (req, res) => {
  res.send({ publicKey: 'pk_test_i7bJE84QP11alRDH8lY2Twkw00Jl1wYTZb' });
});``

app.post("/create-payment-intent", async (req, res) => {
    const body = req.body;
  
    const options = {
      ...body,
      amount: 1099,
      currency: "USD"
    };
  
    try {
      const paymentIntent = await stripe.paymentIntents.create(options);
      res.json(paymentIntent);
      console.log(paymentIntent)
    } catch (err) {
      res.json(err);
    }
  });

  app.listen(5000, () => {
    console.log('Running on port 5000');
  });