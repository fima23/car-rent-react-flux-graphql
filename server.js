var express = require('express');
var graphqlHTTP = require('express-graphql');
var cors = require('cors');
var cars = require('./src/mocks/cars');
var {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
	GraphQLInt,
	GraphQLBoolean
} = require('graphql');

const CarType = new GraphQLObjectType({
    name: 'car',
    description: 'A car.',
    fields: () => ({
        _id: {
            type: GraphQLInt,
            description: 'The id of car.'
        },
        name: {
            type: GraphQLString,
            description: 'The name of car.'
        },
        doors: {
            type: GraphQLInt,
            description: 'The doors count of car.'
        },
        cost: {
            type: GraphQLInt,
            description: 'The cost of car.'
        },
        airCondition: {
            type: GraphQLBoolean,
            description: 'The airCondition availability of car.'
        },
        transmission: {
            type: GraphQLString,
            description: 'The transmission of car.'
        },
        engineType: {
            type: GraphQLString,
            description: 'The engineType of car.'
        },
        year: {
            type: GraphQLInt,
            description: 'The year of car.'
        },
    })
});
let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            cars: {
                type: new GraphQLList(CarType)
            }
        },
				resolve: function() {
					return getAllCars();
				}
    }),
})
var root = { cars: () => cars };


var app = express();
app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
	rootValue: root
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
