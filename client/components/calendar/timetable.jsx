CalendarTimetable = React.createClass({
  componentDidMount() {
    $('#full-calendar').fullCalendar()
  },
  render() {
    return (
    	<div className="calendar-container container-content">
        	<div id="full-calendar"></div>
        </div>
    )
  }
})  