NotificationsList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      notifications: Notifications.find({}).fetch()
    }
  },

  _renderNotification(notification) {
    return <Notification item={notification} key={notification._id} />
  },

  render() {
    return (
      <div className="notification-container container-content">
        {this.data.notifications.map(this._renderNotification)}
      </div>
    )
  },
})  