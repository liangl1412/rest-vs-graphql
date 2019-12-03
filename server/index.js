import express from 'express';
import mongoose from 'mongoose';

import bodyParser from 'body-parser';
import apiRoute from './REST/route';
import expressGraphQL from 'express-graphql';
import schema from './graphql/schema';
import Models from './models';
import { dataloaders } from './graphql/dataloader';
import cors from 'cors';
const app = express();

mongoose.connect('mongodb://localhost/blog');
const db = mongoose.connection
mongoose.set('debug', true);
const apiLogger = function(req, res, next) {
  console.log("api request hit");
  next(); // Passing the request to the next handler in the stack.
}
const graphLogger = function(req, res, next) {
  console.log("graphql request hit");
  next(); // Passing the request to the next handler in the stack.
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');

app.use('/api', apiLogger);
app.use('/api', apiRoute);


app.get('/', (req, res) => {
  res.send('Hello World..');
});


app.get('/post', (req, res) => {
  res.render('post',{
    postId: '5dded3ab2ad8f82eb8937aab',
    enableGraphql: false
	});
});

app.use('/graphql', graphLogger);

app.use('/graphql', cors(), expressGraphQL({
  schema:schema,
  context: {
    Models,
    dataloaders: dataloaders(Models.User)
  },
  graphiql:true,
}));

app.listen(4000, () => {
  console.log('running at port 4000...')
})
