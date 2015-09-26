CalendarEvents = new Mongo.Collection('calendarEvents')
Notifications = new Mongo.Collection('notifications')

Meteor.methods({
    toggleReadNotification(id, setRead) {
        Notifications.update(id, { $set: { read: setRead } })
    }
})