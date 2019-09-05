const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const config = require('./config.json');

mongoose.connect(`mongodb+srv://${config.MONGO_USERNAME}:${config.MONGO_PASSWORD}@andycluster-f7t5s.mongodb.net/formative?retryWrites=true&w=majority`, {useNewUrlParser: true});

const Project = require('./models/projects');
const Author = require('./models/authors');;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('we are connected to mongo db');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

//Home Route
app.get('/', function(req, res){
    res.send('Welcome to our project');
});

//Add a new Project
app.post('/addProject', function(req, res){
  const project = new Project({
    projectId: new mongoose.Types.ObjectId(),
    // authorId: req.body.author_id,						// we'll add validating author soon !
    authorName: req.body.author_name,
    projectName: req.body.project_name,
		screenshotURL: req.body.screenshot_URL
  });

	product.save().then(result => {
      res.send(result);
  }).catch(err => res.send(err));
});

// // Get all Projects
app.get('/allProducts', function(req, res){
    Project.find().then(result => {
        res.send(result);
    })
})

// //Get single Project based on ID
app.post('/project/:id', function(req, res){
  const id = req.params.id;

  Project.findById(id, function(err, project) {
    if (project['authorId'] == req.body.author_name) {
      res.send(project)
    } else {
      res.send('401')
    }
  })

});

// //Get single Project based on ID
app.patch('/project/:id', function(req, res){
    const id = req.params.id;

    Project.findById(id, function(err, product) {
      if (project['authorId'] == req.body.author_name) {
        const newUser = {
            authorName: req.body.author_name,
            projectName: req.body.project_name
        };
        Project.updateOne({ _id : id }, newUser).then(result => {
            res.send(result);
        }).catch(err => res.send(err));
      } else {
        res.send('401, permission denied')
      }
    }).catch(err => res.send('cannot find a product with that id'));
})

// // Register Route
app.post('/authors', function(req, res){
    User.findOne({ username: req.body.username }, function (err, checkUser) {
        if(checkUser){
            res.send('user already exists');
        } else {
            const hash = bcrypt.hashSync(req.body.password);
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                username: req.body.username,
                email: req.body.email,
                password: hash
            });
            user.save().then(result => {
                res.send(result);
            }).catch(err => res.send(err));
        }
    });
})

app.listen(port, () => {
    // console.clear();
    console.log(`application is running on port ${port}`)
});
