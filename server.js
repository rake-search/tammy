import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import Task from './api/models/itemListModel';
import routes from './api/routes/itemListRoutes';

const app = express();
const port = process.env.PORT || 3000;

// mongoose instance connection url connection
const uri = 'mongodb://thamsanqa:!tha269111@' +
  'cluster0-shard-00-00-3mbht.mongodb.net:27017,' +
  'cluster0-shard-00-01-3mbht.mongodb.net:27017,' +
  'cluster0-shard-00-02-3mbht.mongodb.net:27017/items?' +
  'ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';

mongoose.Promise = global.Promise;
mongoose.connect(uri);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app);  //register the route

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

app.use((req, res) => {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('Listening on port ' + port);