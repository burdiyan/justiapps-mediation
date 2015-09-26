Calendar = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
        calendarEvents: CalendarEvents.find().fetch()
    }
  },
  componentDidMount() {
    $('#full-calendar').fullCalendar({
      events: this.data.calendarEvents
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