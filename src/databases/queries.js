/**
 * This file contains database queries
 */

"use strict"
const {Person, PersonSubject, Subject, Role, Menu,RoleAuthorization} = require('./schemas')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
//Connect to Mongodb
//TODO add username and password
mongoose.connect('mongodb://localhost:27017/kaziquest_school', {useNewUrlParser: true, useCreateIndex: true})

const queries = {
    /**
     * CRUD Users
     */
    createUser: async args => await new Person({
        name: args.name,
        email: args.email,
        role: args.role,
        password: bcrypt.hashSync(args.password, 10),
        timestamp: new Date()
    }).save(),

    deleteUser: async args => await Person.findByIdAndDelete(args.id).exec(),

    updateUserName: async args => await Person.findByIdAndUpdate(args.id, {name: args.name}, {new: true}).exec(),

    updateUserRole: async args => await Person.findByIdAndUpdate(args.id, {role: args.role}, {new: true}).exec(),

    updateUserPassword: async args => await Person.findByIdAndUpdate(args.id, {password: bcrypt.hashSync(args.password, 10),}, {new: true}).exec(),

    updateUserEmail: async args => await Person.findByIdAndUpdate(args.id, {email: args.newEmail}, {new: true}).exec(),

    updateUserStatus: async args => await Person.findByIdAndUpdate(args.id, {isactive: args.isactive}, {new: true}).exec(),

    getUser: async args => await Person.findById(args.id).exec(),

    getAllUsersByRole: async args => await Person.find({role:args.role}).exec(),

    getAllActiveUsersByRole: async args => await Person.find({role:args.role,confirmed:true,isactive:true}).exec(),

    getAllUsers: async () => await Person.find().exec(),

    isUserExists: async (args)=>  await Person.findOne({email: args.email}).exec(),
    /**
     * CRUD Roles
     */
    createRole: async args => await new Role({
        role: args.role,
        created_by: args.created_by,
        timestamp: new Date()
    }).save(),

    updateRoleStatus: async args => await Role.findByIdAndUpdate(args.id, {isactive: args.isactive}, {new: true}).exec(),

    updateRole: async args => await Role.findByIdAndUpdate(args.id, {role: args.newRole}, {new: true}).exec(),

    getRole: async args => await Role.findById(args.id).exec(),

    getRoles: async () => await Role.find().exec(),

    getSignupRoles: async () => {
        return await Person.findOne({role:'5c3a4be8d08d5d582332d66b',isactive:true}).exec().then(async person=>{
            if(person){
        return await Role.find({_id:{$ne:'5c3a4be8d08d5d582332d66b'},isactive:true}).exec()
            }
           return await Role.find({isactive:true}).exec()

        })
    },

    /**
     * CRUD Subjects
     */
    createSubject: async args => await new Subject({
        subject: args.subject,
        created_by: args.created_by,
        timestamp: new Date()
    }).save(),

    updateSubjectStatus: async args => await Subject.findByIdAndUpdate(args.id,{isactive: args.isactive}, {new: true}).exec(),

    updateSubject: async args => await Subject.findByIdAndUpdate(args.id, {subject: args.newSubject}, {new: true}).exec(),

    getSubject: async args => await Subject.findById(args.id).exec(),

    getSubjects: async () => await Subject.find().exec(),

    /**
     * CRUD Person Subjects
     */
    addNewSubject: async args => await PersonSubject.findByIdAndUpdate(args.id,
        {
            $push: {
                subjects: args.subject
            },
            person: args.person,
            timestamp: new Date()
        }, {upsert: true, new: true, setDefaultsOnInsert: true,}).exec(),

    removeSubject:
        async args => await PersonSubject.findByIdAndUpdate(args.id,
            {
                $pull: {
                    subjects: args.subject
                },
            }).exec(),

    getPersonSubject:
        async args => await PersonSubject.findOne({
            person: args.person,
        }).exec(),

    /**
     * CRUD Menus
     */
    createMenu: async args => await new Menu({
        menu: args.menu,
        roles: args.roles,
        created_by: args.created_by,
        url: args.url,
        timestamp: new Date()
    }).save(),

    // removeMenu:
    //     async args => await Menu.findByIdAndDelete(args.id).exec(),
    //
    // updateMenuName:
    //     async args => await Menu.findByIdAndUpdate(args.id, {menu: args.newMenu}, {new: true}).exec(),
    //
    // updateMenuRoles:
    //     async args => await Menu.findByIdAndUpdate(args.id, {roles: args.roles,}, {new: true}).exec(),
    //
    // updateMenuUrl:
    //     async args => await Menu.findByIdAndUpdate(args.id, {url: args.url,}, {new: true}).exec(),
    //
    //
    // getMenu:
    //     async args => await Menu.findById(args.id).exec(),
    //
    // getAllMenus:
    //     async args => await Menu.find().exec(),

 /**
     * CRUD Role Permissions
     */
    createRoleAuthorization: async args => await new Menu({
        menu: args.menu,
        roles: args.roles,
        created_by: args.created_by,
        url: args.url,
        timestamp: new Date()
    }).save(),

    removeMenu:
        async args => await Menu.findByIdAndDelete(args.id).exec(),

    updateMenuName:
        async args => await Menu.findByIdAndUpdate(args.id, {menu: args.newMenu}, {new: true}).exec(),

    updateMenuRoles:
        async args => await Menu.findByIdAndUpdate(args.id, {roles: args.roles,}, {new: true}).exec(),

    updateMenuUrl:
        async args => await Menu.findByIdAndUpdate(args.id, {url: args.url,}, {new: true}).exec(),


    getMenu:
        async args => await Menu.findById(args.id).exec(),

    getAllMenus:
        async args => await Menu.find().exec(),


}
module.exports = queries
