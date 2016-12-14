var {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList
} = require('graphql');
var CarType = require('../schemaTypes/carTypes');
let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            cars: {
                type: new GraphQLList(CarType)
            }
        }
    }),
})

module.exports = schema;
