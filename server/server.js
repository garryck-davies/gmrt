require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller');


//initialize express app
const app = express();


//destructure from .env
let { CONNECTION_PORT, CONNECTION_STRING } = process.env;


//connect to DB
massive(CONNECTION_STRING).then(db => {
    console.log('DB CONNECTED')
    app.set('db', db)
});


//middleware
app.use(express.json());


//endpoints
app.get('/api/getMens', ctrl.getMens)
app.get('/api/getWomens', ctrl.getWomens)
app.get('/api/getAccessories', ctrl.getAccessories)
app.get('/api/getHeadwear', ctrl.getHeadwear)
app.get('/api/getHoodies', ctrl.getHoodies)
app.get('/api/getTops', ctrl.getTops)
app.post('/api/cart', ctrl.cart)
app.post('/api/addToCart', ctrl.addToCart)
// app.put('/api/updateQuantity', ctrl.updateQuantity)
app.delete('/api/checkout/:cart_id', ctrl.checkout)
app.delete('/api/removeItem/:item_id', ctrl.removeItem)

//listen on port
app.listen(CONNECTION_PORT, () => {
    console.log(`Listening on port: ${CONNECTION_PORT}`)
})