CalendarEvents = new Mongo.Collection('calendarEvents')
Notifications = new Mongo.Collection('notifications')
Cases = new Mongo.Collection('cases')

Meteor.methods({
    toggleReadNotification(id, setRead) {
        Notifications.update(id, { $set: { read: setRead } })
    },

    addCase(caseData) {
        Cases.insert(caseData)
    }
})