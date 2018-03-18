import express from 'express';
import mongoose from 'mongoose';

import bodyParser from 'body-parser';
import apiRoute from './REST/route';

const app = express();

mongoose.connect('mongodb://localhost/blog');
const db = mongoose.connection
const logger = function(req, res, next) {
  console.log("api request hit");
  next(); // Passing the request to the next handler in the stack.
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');

app.use('/api', logger);
app.use('/api', apiRoute);


app.get('/', (req, res) => {
  res.send('Hello World..');
});


app.get('/post/:id', (req, res) => {
  res.render('post',{
		postId: req.params.id
	});
});

// // GraphQL API
// app.use('/graphql', graphqlHTTP(() => ({
//   schema,
//   graphiql: true,
//   pretty: true
// })))

app.listen(3000, () => {
  console.log('running at port 3000...')
})
