"use strict"
//add required modules
const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors')
const {ApolloServer,ApolloError} = require('apollo-server-koa')
const schema = require('./src/api/graphql_schema')
const mongoose = require('mongoose')
const authenticate=require('./src/api/middleware/authenticate')

//connect to the database
mongoose.connect('mongodb://localhost:27017/kaziquest_school', {useNewUrlParser: true, useCreateIndex: true})


const app = new Koa()
const router = new Router()
//create the GraphQL endpoint
const index = new ApolloServer({
    schema: schema,
    context: ({ctx}) => ctx,
        formatError: error => {
            console.log(error);
            return new ApolloError('Oops! Something went wrong');
        },
})

router.get('/confirm/:token', async ctx => {
    const token = ctx.params.token
    if(token){
        await authenticate.confirmEmail(token).then(person=>{
        ctx.redirect('http://localhost:3000/')
        })
    }else {
        ctx.body='No token provided'
    }


})


    //apply middleware
index.applyMiddleware({app})
app.use(cors())
app.use(router.routes())
app.use(router.allowedMethods())
//start server
app.listen(8080, () => console.log("Server running on port 8080"))
