'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PersonSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is a required field']
    },
    email: {
        type: String,
        required: [true, 'Email is a required field'],
        unique: [true, 'User already exists']
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: [true, 'Role is a required field']
    },
    password: {
        type: String,
        required: [true, 'Password is a required field']
    },
    timestamp: {
        type: Date
    },
    isactive: {
        type: Boolean,
        default: false
    },
    confirmed: {
        type: Boolean,
        default: false
    },

})

const RoleSchema = new Schema({
    role: {
        type: String,
        required: [true, 'Role is a required field'],
        unique: [true, 'Role already exists']
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'Person'
    },
    timestamp: {
        type: Date
    },
    isactive: {
        type: Boolean,
        default: true
    }
})
const RoleAuthorizationSchema = new Schema({
    category: {
        type: String,
        required: [true, 'Category is a required field'],
        unique: [true, 'Category is already exists']
    },
    url: {
        type: String,
        required: [true, 'Menu is a required field'],
        unique: [true, 'Menu url already exists']
    },
    create: [{
        type: Schema.Types.ObjectId,
        ref: 'Person'
    }],
    read: [{
        type: Schema.Types.ObjectId,
        ref: 'Person'
    }],
    update: [{
        type: Schema.Types.ObjectId,
        ref: 'Person'
    }],
    delete: [{
        type: Schema.Types.ObjectId,
        ref: 'Person'
    }],
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'Person'
    },
    timestamp: {
        type: Date
    },
    isactive: {
        type: Boolean,
        default: true
    }
})

const SubjectSchema = new Schema({
    subject: {
        type: String,
        required: [true, 'Subject is a required field'],
        unique: [true, 'Subject already exists']
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'Person'
    },
    timestamp: {
        type: Date
    },
    isactive: {
        type: Boolean,
        default: true
    }
})

const PersonSubjectSchema = new Schema({
    person: {
        type: Schema.Types.ObjectId,
        ref: 'Person'
    },
    subjects: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Subject'
        }
    ],
    timestamp: {
        type: Date
    },

})
const MenuSchema = new Schema({
    menu: {
        type: String,
        required: [true, 'Menu is a required field']
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'Person'
    },
    roles: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Role'
        }
    ],
    timestamp: {
        type: Date
    },
    url: {
        type: String,
        required: [true, 'Menu is a required field'],
        unique: [true, 'Menu url already exists']
    },
    isactive: {
        type: Boolean,
        default: true
    }
})

const Person = mongoose.model('Person', PersonSchema)
const PersonSubject = mongoose.model('PersonSubject', PersonSubjectSchema)
const Role = mongoose.model('Role', RoleSchema)
const Subject = mongoose.model('Subject', SubjectSchema)
const Menu = mongoose.model('Menu', MenuSchema)
const RoleAuthorization = mongoose.model('RoleAuthorization', RoleAuthorizationSchema)

module.exports = {
    Person, PersonSubject, Subject, Role, Menu,RoleAuthorization
}