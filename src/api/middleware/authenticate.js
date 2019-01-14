const jwt = require('jsonwebtoken')
const config = require('../config')
const {Person} = require('../../databases/schemas')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


mongoose.connect('mongodb://localhost:27017/kaziquest_school', {useNewUrlParser: true, useCreateIndex: true})
module.exports = {
    authenticate: async (ctx) => {

        const authorizationHeader = ctx.headers['authorization']
        let token
        if (authorizationHeader) {
            token = authorizationHeader.split(' ')[1]
        }
        if (token) {
            return await jwt.verify(token, config.jwtSecret, async (err, decoded) => {
                if (err) {
                    return {error: 'Failed to authenticate'}
                } else {
                    return {
                        id: decoded.id,
                        email: decoded.email,
                        role: decoded.role,
                    }

                }
            })
        } else {
            return {error: 'No token provided'}
        }
    },
    confirmEmail: async token => {
        return await jwt.verify(token, config.confirmationSecret, async (err, decoded) => {
            if (err) {
                return {error: 'Failed to authenticate'}
            } else {
                return await Person.findByIdAndUpdate(decoded.id, {confirmed: true, isactive: true}, {new: true}).exec()
            }
        })

    },
    login: async (args) => {
        const {email, password} = args
        return await Person.findOne({email: email}).select('_id email password role confirmed isactive').exec().then(function (person) {
            if (person) {
                if (bcrypt.compareSync(password, person.password)) {
                    if (!person.confirmed) {
                        return {
                            ok: false,
                            token: null,
                            error: 'Your email has not been confirmed. Follow the link sent to you in your confirmation' +
                                ' email to confirm it'
                        }
                    }
                    if (!person.isactive) {
                        return {
                            ok: false,
                            token: null,
                            error: 'Your account is currently inactive. Please contact your administrator.'
                        }
                    } else {

                        return {
                            ok: true,
                            token: jwt.sign({
                                id: person._id,
                                email: person.email,
                                role: person.role,
                            }, config.jwtSecret),
                            error: null
                        }
                    }
                    return {
                        ok: false,
                        token: null,
                        error: 'No user with such credentials exists. Please check your email and password and try' +
                            ' again.'
                    }
                }
            }
            return {
                ok: false,
                token: null,
                error: 'No user with such credentials exists. Please check your email and password and try' +
                    ' again.'
            }
        }).catch(function (err) {
            console.log(err)
            return {
                ok: false,
                token: null,
                error: "oops!! Something went wrong"
            }
        })
    }
}
