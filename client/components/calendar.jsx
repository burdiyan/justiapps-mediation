Calendar = React.createClass({
  componentDidMount() {
    $('#full-calendar').fullCalendar()
  },
  render() {
    return (
        <div id="full-calendar"></div>
    )
  }
})  