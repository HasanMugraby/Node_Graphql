const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema} = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');


const typesArry = loadFilesSync(path.join(__dirname,'**/*.graphql' ));
const resolversArray = loadFilesSync(path.join(__dirname,'**/*.resolver.js'));

const schema = makeExecutableSchema({
    typeDefs: typesArry,
    resolvers: resolversArray,
});


const app = express();

app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(3000, ()=>{
    console.log(`Listening to port 3000 ...`);
});