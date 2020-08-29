const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { ApolloServer } = require('apollo-server-express')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({ 
	typeDefs, 
	resolvers,
	introspection: true,
	playground: true
})

const app = express()
require('./config/db')
app.use(cors())
app.use(bodyParser.json())

server.applyMiddleware({ app, path: '/graphql' })

if (process.env.NODE_ENV === 'production') {
	//Express will serve up production assets like main.js file or main.css

	app.use(express.static('client/build'))
	//express will server up the index.html file if it doesn't recognize the route
	const path = require('path')
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname00, 'client', 'build', 'index.html'))
	})
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('listening'))
