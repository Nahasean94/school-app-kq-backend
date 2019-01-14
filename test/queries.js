const queries = require('../src/databases/queries')
const {expect} = require('chai')
const {describe, before} = require('mocha')


describe('#createUser', () => {
    before(async function () {
        return await queries.deleteUser({email: "joh@doe.com"})
    });
    const userInfo = {
        name: "John Doe",
        email: "joh@doe.com",
        role: "5c39b1d7b0b99b5a94268088",
        password: "abc123",
    }

    it('should return matching record', async function () {
        const person = await queries.createUser(userInfo)
        console.log(person)
        expect(person).to.include({
            name: "John Doe",
            email: "joh@doe.com",

        });

    })
})

describe('#updateUserName', () => {
    const userInfo = {
        name: "Sean",
        email: "joh@doe.com"
    }

    it('should return matching record', async function () {
        const person = await queries.updateUserName(userInfo)
        expect(person).to.include({
            name: "Sean",
            email: "joh@doe.com"
        });

    })
})
describe('#updateUserRole', () => {
    const userInfo = {
        role: "5c39b79cb9717d6060a33c80",
        email: "joh@doe.com"
    }

    it('should return matching record', async function () {
        const person = await queries.updateUserRole(userInfo)
        expect(person).to.include({
            name: "Sean",
            email: "joh@doe.com"
        });

    })
})
describe('#updateUserPassword', () => {
    const userInfo = {
        password: "stockmann",
        email: "joh@doe.com"
    }

    it('should return matching record', async function () {
        const person = await queries.updateUserPassword(userInfo)
        expect(person).to.include({
            name: "Sean",
            email: "joh@doe.com"
        });

    })
})

describe('#updateUserEmail', () => {
    const userInfo = {
        newEmail: "sean@gmail.com",
        email: "joh@doe.com"
    }

    it('should return matching record', async function () {
        const person = await queries.updateUserEmail(userInfo)
        expect(person).to.include({
            name: "Sean",
            email: "sean@gmail.com"
        });

    })
})

describe('#updateUserStatus', () => {
    const userInfo = {
        isactive: false,
        email: "sean@gmail.com"
    }

    it('should return matching record', async function () {
        const person = await queries.updateUserStatus(userInfo)
        expect(person).to.include({
            name: "Sean",
            email: "sean@gmail.com",
            isactive: false,

        });

    })
})
describe('#getUser', () => {
    const userInfo = {
        email: "sean@gmail.com"
    }

    it('should return details of a user', async function () {
        const person = await queries.getUser(userInfo)
        expect(person).to.include({
            name: "Sean",
            email: "sean@gmail.com",
            isactive: false,
        });

    })
})
// describe('#getAllUsers',() => {
//
//     it('should return all users in the db', async function () {
//         const people = await queries.getAllUsers()
//         expect(people).to.have.deep.members.include([{
//             name: "Sean",
//             email: "sean@gmail.com",
//             isactive: false,
//         }]);
//
//     })
// })
describe('#createRole', () => {
    const roleInfo = {
        role: "admin",
    }

    it('should return matching record', async function () {
        const role = await queries.createRole(roleInfo)
        expect(role).to.include({
            role: "admin",
        });

    })
})
describe('#updateRoleStatus', () => {
    const roleInfo = {
        role: 'system',
        isactive: false
    }

    it('should return matching record', async function () {
        const role = await queries.updateRoleStatus(roleInfo)
        expect(role).to.include({
            role: 'system',
            isactive: false

        });

    })
})

describe('#updateRole', () => {
    const roleInfo = {
        role: 'ss',
        newRole: "system"
    }

    it('should return matching record', async function () {
        const role = await queries.updateRole(roleInfo)
        expect(role).to.include({
            role: 'system',
        });

    })
})

describe('#getRole', () => {
    const roleInfo = {
        role: 'system'
    }

    it('should return matching record', async function () {
        const role = await queries.getRole(roleInfo)
        expect(role).to.include({
            role: 'system',
        });

    })
})
describe('#getSignupRoles', () => {

    it('should return matching record', async function () {
        const roles = await queries.getSignupRoles()
        console.log(roles)
        expect(roles).to.include([{
            role: 'system',
        }]);

    })
})
describe('#createSubject', () => {
    const subjectInfo = {
        subject: "Englis",
        created_by:'5c39b82f75ec0060f6abe047'
    }

    it('should return matching record', async function () {
        const subject = await queries.createSubject(subjectInfo)
        expect(subject).to.include({
            subject: "Englis",
        });

    })
})

describe('#updateSubjectStatus', () => {
    const subjectInfo = {
        subject: 'Englis',
        isactive: false
    }

    it('should return matching record', async function () {
        const subject = await queries.updateSubjectStatus(subjectInfo)
        expect(subject).to.include({
            subject: 'Englis',
            isactive: false

        });

    })
})

describe('#updateSubject', () => {
    const subjectInfo = {
        subject: 'Englis',
        newSubject: "English"
    }

    it('should return matching record', async function () {
        const subject = await queries.updateSubject(subjectInfo)
        expect(subject).to.include({
            subject: 'English',
        });

    })
})

describe('#getSubject', () => {
    const subjectInfo = {
        subject: 'English'
    }

    it('should return matching record', async function () {
        const subject = await queries.getSubject(subjectInfo)
        expect(subject).to.include({
            subject: 'English',
            isactive:false
        });

    })
})
describe('#addNewSubject', () => {
    const subjectInfo = {
        subject: '5c39c54409b4986f6c1c0751',
        person: '5c39b82f75ec0060f6abe047'
    }

    it('should add new entry', async function () {
        const subject = await queries.addNewSubject(subjectInfo)
        expect(typeof subject).eql('object');

    })
})

describe('#removeSubject', () => {
    const subjectInfo = {
        subject: '5c39c54409b4986f6c1c0751',
        person: '5c39b82f75ec0060f6abe047'
    }

    it('should remove subject from list of a persons subject', async function () {
        const subject = await queries.removeSubject(subjectInfo)
        expect(typeof subject).eql('object');

    })
})
describe('#getPersonSubject', () => {

    const subjectInfo = {
        person: '5c39b82f75ec0060f6abe047'
    }

    it('should a user with list of  their subjects', async function () {
        const subject = await queries.getPersonSubject(subjectInfo)
        console.log(subject)
        expect(typeof subject).eql('object');

    })
})
describe('#createMenu', () => {
    const menuInfo = {
        menu: 'Students',
        roles: ['5c39b1d7b0b99b5a94268088','5c39b79cb9717d6060a33c80'],
        created_by: '5c39b82f75ec0060f6abe047',
        url:'/students',
    }

    it('should create a new menu', async function () {
        const menu = await queries.createMenu(menuInfo)
        console.log(menu)
        expect(menu).to.include({
            menu: 'Students',
            url:'/students'
        });


    })
})
describe('#removeMenu', () => {
    const menuInfo = {
        menu: 'Students'
    }

    it('should remove a menu', async function () {
        const menu = await queries.removeMenu(menuInfo)
        console.log(menu)
        expect(menu).to.include({
            menu: 'Students',
            url:'/students'
        });


    })
})
describe('#updateMenuName', () => {
    const menuInfo = {
        menu: 'Students',
        newMenu:'Mastude'
    }

    it('should edit the name of a menu', async function () {
        const menu = await queries.updateMenuName(menuInfo)
        console.log(menu)
        expect(menu).to.include({
            menu: 'Mastude',
            url:'/students'
        });


    })
})

describe('#updateMenuRoles', () => {
    const menuInfo = {
        roles: ['5c39b1d7b0b99b5a94268088'],
        menu:'Mastude'
    }

    it('should edit the roles of a menu', async function () {
        const menu = await queries.updateMenuRoles(menuInfo)
        console.log(menu)
        expect(menu).to.include({
            menu: 'Mastude',
            url:'/students'
        });


    })
})
describe('#updateMenuUrl', () => {
    const menuInfo = {
        url: '/mastude',
        menu:'Mastude'
    }

    it('should edit the url of a menu', async function () {
        const menu = await queries.updateMenuUrl(menuInfo)
        console.log(menu)
        expect(menu).to.include({
            menu: 'Mastude',
            url:'/mastude'
        });


    })
})
describe('#getMenu', () => {
    const menuInfo = {
        menu:'Mastude'
    }

    it('should get the info a menu', async function () {
        const menu = await queries.getMenu(menuInfo)
        console.log(menu)
        expect(menu).to.include({
            menu: 'Mastude',
            url:'/mastude'
        });


    })
})
describe('#sendMail', () => {


    it('should get send email', async function () {
        "use strict";

    })
})
