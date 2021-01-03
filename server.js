const express = require("express");
const mongoose = require("mongoose");

import Cards from './dbCards.js'

// AppConfig
const app = express();
const port = process.env.PORT || 8088
const connection_url = 'mongodb+srv://admin:BTATpb1W8BNGWMuY@cluster0.3ekyt.mongodb.net/tinder-db?retryWrites=true&w=majority'

// Middlewares





// DbConfig
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})



// API endpoints
app.get('/',(req,res)=>{
    res.status(200).send('Hello world!')
});

app.post('/tinder/card', (req,res)=>{
    const dbCard = req.body;

    Cards.create(dbCard, (err, data)=>{
        if (err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/cards',(req,res)=>{

    Cards.find((err, data)=>{
        if (err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
});


// Listener
app.listen(port, ()=> console.log(`listening port : ${port}`))