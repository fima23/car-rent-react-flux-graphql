var express = require('express');
var graphqlHTTP = require('express-graphql');
var cors = require('cors');
var cars = require('./src/mocks/cars');
var schema = require('./src/schemas/cars');

var root = { cars: () => cars };
var app = express();
app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
	rootValue: root
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
