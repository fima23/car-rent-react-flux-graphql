var express = require('express');
var graphqlHTTP = require('express-graphql');
var cors = require('cors');

var {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
	GraphQLInt,
	GraphQLBoolean
} = require('graphql');

const cars = [
		{_id: 11, name: 'BMW x5', doors: 4, cost: 120, airCondition: true, transmission: 'МКПП', engineType: 'бензин', year: 2014 },
		{_id: 12, name: 'Renault Sandero', doors: 5, cost: 50, airCondition: false, transmission: 'МКПП', engineType: 'бензин', year: 2013},
		{_id: 13, name: 'Renault Logan', doors: 3, cost: 200, airCondition: true, transmission: 'АКПП', engineType: 'дизель', year: 2009},
		{_id: 14, name: 'Chevrolet Spark', doors: 4, cost: 320, airCondition: true, transmission: 'МКПП', engineType: 'бензин', year: 2010},
		{_id: 15, name: 'Volkswagen Polo Sedan', doors: 5, cost: 150, airCondition: false, transmission: 'МКПП', engineType: 'бензин', year: 2011},
		{_id: 16, name: 'Nissan Almera', doors: 3, cost: 111, airCondition: true, transmission: 'АКПП', engineType: 'бензин', year: 2009},
		{_id: 17, name: 'Skoda Rapid', doors: 2, cost: 122, airCondition: true, transmission: 'МКПП', engineType: 'дизель', year: 2009},
		{_id: 18, name: 'Ford Focus', doors: 4, cost: 151, airCondition: false, transmission: 'АКПП', engineType: 'дизель', year: 2015},
		{_id: 19, name: 'Renault Logan', doors: 5, cost: 99, airCondition: true, transmission: 'МКПП', engineType: 'бензин', year: 2009},
		{_id: 20, name: 'Volkswagen Polo Sedan', doors: 4, cost: 89, airCondition: true, transmission: 'МКПП', engineType: 'бензин', year: 2008}
];

const mocks = {
	cars: () => cars
}

var getAllCars = function() {
	return cars;
}

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
	rootValue: root,
	mocks: mocks,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
