import express from 'express';
import mongoose from 'mongoose';


const app = express();

mongoose.connect('mongodb://localhost/blog');
const db = mongoose.connection



app.get('/', (req, res) => {
  res.send('Hello World..');
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
