const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const config = require('./config.json');
const Project = require('./models/projects');
const Author = require('./models/authors');

mongoose.connect(`mongodb+srv://${config.MONGO_USERNAME}:${config.MONGO_PASSWORD}@andycluster-f7t5s.mongodb.net/formative?retryWrites=true&w=majority`,  {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('we are connected to mongo db');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.get('/', function(req, res){
    res.send('test');
});

app.post('/addProject', function(req, res){
    console.log(req.body);
  // const project = new Project({
  //   _id: new mongoose.Types.ObjectId(),
  //   // authorId: req.body.author_id,						// we'll add validating author soon !
  //   // authorName: req.body.author_name,
  //   // projectName: req.body.project_nane,
	// // 	screenshotURL: req.body.screenshot_URL
  // });
  //
	// project.save().then(result => {
  //     res.send(result);
  // }).catch(err => res.send(err));
});

app.listen(port, () => {
    // console.clear();
    console.log(`application is running on port ${port}`)
});
