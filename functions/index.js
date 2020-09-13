const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HQEMnFRRV5Q55EFtvu5xw0zoiPL6KEYMtMFj96NNocqclQVckjxgExoDftBFrHDcyERg0ioVr9bDvVwsKqEc4dy00fgcQMVT3')
//-APP conifg
const app = express();
//- Middlewares
app.use(cors({
    origin: true
}));

app.use(express.json());

app.get('/', (request, response ) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) =>{
    const total = request.query.total;
    console.log('Payment Request Received Weepeee', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    });
    //Ok -created
    response.status(201).send({
        clientSecret : paymentIntent.client_secret,
    })
})
//Listen command

exports.api = functions.https.onRequest(app)

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.


// The Firebase Admin SDK to access Cloud Firestore.

admin.initializeApp();