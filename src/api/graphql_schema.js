/**
 * The code in this file is for resolving GraphQL requests.
 * @type {{createSubject, getSubject, updateRole, getUser, getSubjects, createRole, getAllMenus, updateSubjectStatus, getPersonSubject, updateRoleStatus, getMenu, updateUserStatus, updateSubject, getRoles, getAllUsers, createMenu, addNewSubject, removeSubject, updateUserName, getRole, updateUserEmail, updateMenuName, updateUserRole, updateUserPassword, removeMenu, updateMenuRoles, deleteUser, createUser, updateMenuUrl}}
 */


const queries = require('../databases/queries')
const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLBoolean,} = require('graphql')
const {ApolloError} = require('apollo-server-koa')
const jwt = require('jsonwebtoken')
const authentication = require('./middleware/authenticate')
const config = require('./config')
const {sendConfirmationEmail} = require('./sendmail')

const PersonType = new GraphQLObjectType({
    name: 'Person',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString,},
        email: {type: GraphQLString,},
        role: {type: GraphQLString,},
        isactive: {type: GraphQLBoolean,},
        confirmed: {type: GraphQLBoolean,},
        timestamp: {type: GraphQLString},
    })
})

const RoleType = new GraphQLObjectType({
    name: 'Role',
    fields: () => ({
        id: {type: GraphQLID},
        role: {type: GraphQLString,},
        created_by: {
            type: PersonType,
            resolve: async (parent, args, ctx) => {
                return await queries.getUser({id: parent.created_by})
            }
        },
        isactive: {type: GraphQLBoolean,},
        timestamp: {type: GraphQLString},
    })
})

const SubjectType = new GraphQLObjectType({
    name: 'Subject',
    fields: () => ({
        id: {type: GraphQLID},
        subject: {type: GraphQLString,},
        created_by: {
            type: PersonType,
            resolve: async (parent, args, ctx) => {
                return await queries.getUser({id: parent.created_by})
            }
        },
        isactive: {type: GraphQLBoolean,},
        timestamp: {type: GraphQLString},
    })
})
const RoleAuthorizationType = new GraphQLObjectType({
    name: 'RoleAuthorization',
    fields: () => ({
        id: {type: GraphQLID},
        category: {type: GraphQLString,},
        url: {type: GraphQLString,},
        created_by: {
            type: PersonType,
            resolve: async (parent, args, ctx) => {
                return await queries.getUser({id: parent.created_by})
            }
        },
        create: {
            type: new GraphQLList(PersonType),
            resolve: async (parent, args, ctx) => {
                return await queries.getUser({id: parent.create})
            }
        },
        read: {
            type: new GraphQLList(PersonType),
            resolve: async (parent, args, ctx) => {
                return await queries.getUser({id: parent.read})
            }
        },
        update: {
            type: new GraphQLList(PersonType),
            resolve: async (parent, args, ctx) => {
                return await queries.getUser({id: parent.update})
            }
        },
        delete: {
            type: new GraphQLList(PersonType),
            resolve: async (parent, args, ctx) => {
                return await queries.getUser({id: parent.delete})
            }
        },
        isactive: {type: GraphQLBoolean,},
        timestamp: {type: GraphQLString},
    })
})
const PersonSubjectType = new GraphQLObjectType({
    name: 'PersonSubject',
    fields: () => ({
        id: {type: GraphQLID},
        subject: {
            type: new GraphQLList(GraphQLString),
            resolve: async (parent, args, ctx) => {
                return await queries.getSubject({id: parent.subject})
            }
        },
        person: {
            type: PersonType,
            resolve: async (parent, args, ctx) => {
                return await queries.getUser({id: parent.person})
            }
        },

        timestamp: {type: GraphQLString},
    })
})


const MenuType = new GraphQLObjectType({
    name: 'Menu',
    fields: () => ({
        id: {type: GraphQLID},
        menu: {type: GraphQLString},
        created_by: {
            type: PersonType,
            resolve: async (parent, args, ctx) => {
                return await queries.getUser({id: parent.created_by})
            }
        },
        roles: {
            type: RoleType,
            resolve: async (parent, args, ctx) => {
                return await queries.getUser({id: parent.roles})
            }
        },

        url: {type: GraphQLString},
        isactive: {type: GraphQLBoolean},
        timestamp: {type: GraphQLString},
    })
})
const TokenType = new GraphQLObjectType({
    name: 'Token',
    fields: () => ({
        ok: {type: GraphQLBoolean},
        token: {type: GraphQLString},
        error: {type: GraphQLString}
    })
})
const SignupType = new GraphQLObjectType({
    name: 'Signup',
    fields: () => ({
        success: {type: GraphQLBoolean},
    })
})
const isUserExistsType = new GraphQLObjectType({
    name: 'isUserExists',
    fields: () => ({
        exists: {type: GraphQLBoolean},
    })
})
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        person: {
            type: PersonType,
            args: {id: {type: GraphQLID}},
            resolve: async (parent, args) => {
                return queries.findUser({id: args.id})
            }
        },
        getSignupRoles: {
            type: new GraphQLList(RoleType),
            resolve: async (parent, args, ctx) => await queries.getSignupRoles(args).then(roles => roles)
        },
        getAllStudents: {
            type: new GraphQLList(PersonType),
            resolve: async (parent, args, ctx) => {
                const {role}=await authentication.authenticate(ctx)
                if (role === '5c3a4b8f427a0e57a2b9df44'||role === '5c39b79cb9717d6060a33c80') {
                   return await queries.getAllActiveUsersByRole({role:'5c3a4b8f427a0e57a2b9df44',}).then(users => users)
                }  else if (role === '5c3a4be8d08d5d582332d66b') {
                  return  await queries.getAllUsersByRole({role:'5c3a4b8f427a0e57a2b9df44',}).then(users => users)
                } else{
                    return new ApolloError('You are not authorized to perform this operation')
                }

            }
        },
        getAllTeachers: {
            type: new GraphQLList(PersonType),
            resolve: async (parent, args, ctx) => {
                const {role}=await authentication.authenticate(ctx)
                if (role === '5c3a4b8f427a0e57a2b9df44'||role === '5c39b79cb9717d6060a33c80') {
                   return await queries.getAllActiveUsersByRole({role:'5c39b79cb9717d6060a33c80',}).then(users => users)
                }  else if (role === '5c3a4be8d08d5d582332d66b') {
                  return  await queries.getAllUsersByRole({role:'5c39b79cb9717d6060a33c80',}).then(users => users)
                } else{
                    return new ApolloError('You are not authorized to perform this operation')
                }

            }
        },


    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        login: {
            type: TokenType,
            args: {
                email: {type: GraphQLString},
                password: {type: GraphQLString}
            },
            resolve: async (parent, args, ctx) => await authentication.login(args).then(login => login)
        },

        createUser: {
            type: SignupType,
            args: {
                name: {type: GraphQLString},
                last_name: {type: GraphQLString},
                email: {type: GraphQLString},
                password: {type: GraphQLString},
                role: {type: GraphQLString},
            },
            resolve: async (parent, args, ctx) => await queries.createUser(args).then(async person => {
                const token = jwt.sign({
                    id: person._id,
                }, config.confirmationSecret)
                sendConfirmationEmail(token, person.email).then(mail => {
                    console.log(mail)
                }).catch(err => {
                    console.log(err)
                    return new ApolloError('An error occurred when sending you an email')
                })
                return {success: true}
            })
        },
        isUserExists: {
            type: isUserExistsType,
            args: {
                email: {type: GraphQLString},
            },
            resolve: async (parent, args, ctx) => await queries.isUserExists(args).then(person => {
                return {exists: !!person}
            })
        },
        updateUserRole: {
            type: PersonType,
            args: {
                id: {type: GraphQLID},
                role: {type: GraphQLString},
            },
            resolve: async (parent, args, ctx) => await queries.updateUserRole(args).then(person => person)
        },
        updateUserPassword: {
            type: PersonType,
            args: {
                id: {type: GraphQLID},
                password: {type: GraphQLString},
            },
            resolve: async (parent, args, ctx) => await queries.updateUserPassword(args).then(person => person)
        },
        updateUserEmail: {
            type: PersonType,
            args: {
                id: {type: GraphQLID},
                email: {type: GraphQLString},
            },
            resolve: async (parent, args, ctx) => await queries.updateUserEmail(args).then(person => person)
        },
        getUser: {
            type: PersonType,
            args: {
                id: {type: GraphQLID},
            },
            resolve: async (parent, args, ctx) => await queries.getUser(args).then(person => person)
        },
        getAllStudents: {
            type: PersonType,
            args: {
                role: {type: new GraphQLList(GraphQLString)},
            },
            resolve: async (parent, args, ctx) => {
                const {role} = await authentication.authenticate(ctx)
                const roleInfo = await queries.getRole({id: role})
                if (roleInfo.role === 'admin' || roleInfo.role === 'student' || roleInfo.role === 'teacher')
                    return await queries.getAllUsersByRole(args).then(person => person)
                else
                    return new ApolloError('You are not authorized to perform this operation')
            }
        },
        getAllTeachers: {
            type: PersonType,
            args: {
                role: {type: new GraphQLList(GraphQLString)},
            },
            resolve: async (parent, args, ctx) => {
                const {role} = await authentication.authenticate(ctx)
                const roleInfo = await queries.getRole({id: role})
                if (roleInfo.role === 'admin')
                    await queries.getAllUsersByRole(args).then(person => person)
                else
                    return new ApolloError('You are not authorized to perform this operation')
            }
        },

    }
})

module.exports = new GraphQLSchema({query: RootQuery, mutation: Mutation})