"use strict"
//add required modules
const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors')
const {ApolloServer, ApolloError} = require('apollo-server-koa')
const schema = require('./src/api/graphql_schema')
const mongoose = require('mongoose')
const authenticate = require('./src/api/middleware/authenticate')
const serve = require('koa-static');


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
index.applyMiddleware({app})
router.get('/confirm/:token', async ctx => {
    const token = ctx.params.token
    if (token) {
        await authenticate.confirmEmail(token).then(person => {
            ctx.redirect('http://68.183.29.191:8080/login')
        })
    } else {
        ctx.body = 'No token provided'
    }


})

router.get('*', async ctx => {


ctx.body=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"><meta name="theme-color" content="#000000"><link rel="stylesheet" href="/font-awesome/css/font-awesome.min.css"><link rel="stylesheet" href="/css/bootstrap.min.css"><link rel="stylesheet" href="/css/custom.css"><link rel="shortcut icon" href="/favicon.png"><title>School Management System</title></head><div id="root"></div><script src="/js/jquery-3.2.1.min.js" type="text/javascript"></script><script src="/js/popper.js" type="text/javascript"></script><script src="/js/bootstrap.min.js" type="text/javascript"></script><script>!function(l){function e(e){for(var r,t,n=e[0],o=e[1],u=e[2],f=0,i=[];f<n.length;f++)t=n[f],p[t]&&i.push(p[t][0]),p[t]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(l[r]=o[r]);for(s&&s(e);i.length;)i.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,r=0;r<c.length;r++){for(var t=c[r],n=!0,o=1;o<t.length;o++){var u=t[o];0!==p[u]&&(n=!1)}n&&(c.splice(r--,1),e=f(f.s=t[0]))}return e}var t={},p={2:0},c=[];function f(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return l[e].call(r.exports,r,r.exports,f),r.l=!0,r.exports}f.m=l,f.c=t,f.d=function(e,r,t){f.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(r,e){if(1&e&&(r=f(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)f.d(t,n,function(e){return r[e]}.bind(null,n));return t},f.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(r,"a",r),r},f.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},f.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],n=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var s=n;a()}([])</script><script src="/static/js/1.c5fac61d.chunk.js"></script><script src="/static/js/main.871177d0.chunk.js"></script></html>`
})


//apply middleware
app.use(serve('./public'));

app.use(cors())
app.use(router.routes())
app.use(router.allowedMethods())
//start server
app.listen(8080, () => console.log("Server running on port 8080"))
