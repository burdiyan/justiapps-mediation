CalendarEvents = new Mongo.Collection('calendarEvents')

Meteor.methods({
    getCalendarEventsForUser() {
        return CalendarEvents.find().fetch()
    }
})