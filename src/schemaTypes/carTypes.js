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

module.exports = CarType;
