Meteor.methods({
    getUsers() {
        return Meteor.users.find()
    }
})