// This node server holds our data.
// Required node modules might be:
const config = require('./config.json');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
// const Project = require('./models/projects');
// const User = require('./models/users');

mongoose.connect(`mongodb+srv://${config.MONGO_USERNAME}:${config.MONGO_PASSWORD}@${config.MONGO_CLUSTER_NAME}.mongodb.net/formative3.2?retryWrites=true&w=majority`, {useNewUrlParser: true});

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log(`Today's a big day, Gary!!`);
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.get('/', function(req, res){
    res.send('Welcome to our Products API. Use endpoints to filter out the data');
});

console.log(config.MONGO_PASSWORD);
console.log(config.MONGO_USERNAME);
console.log(config.MONGO_CLUSTER_NAME);
