Calendar = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
        calendarEvents: Meteor.call('getCalendarEventsForUser')
    }
  },
  componentDidMount() {
    $('#full-calendar').fullCalendar({
      events: [
        {
          title: 'Sesión con el cliente 1',
          start: '2015-09-26T16:15:40Z',
          end: '2015-09-26T18:15:40Z'
        }
      ]
    })
  },
  render() {
    return (
    	<div className="calendar-container container-content">
        	<div id="full-calendar"></div>
        </div>
    )
  }
})  