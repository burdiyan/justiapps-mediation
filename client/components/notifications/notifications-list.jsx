NotificationsList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    if (this.props.unread) {
      return {
        notifications: Notifications.find({read: false}).fetch()
      }  
    }
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