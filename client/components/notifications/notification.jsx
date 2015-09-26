Notification = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired
    },

    toggleReadNotification() {
        Meteor.call('toggleReadNotification', this.props.item._id, !this.props.item.read)
    },

    render() {
        const readStatus = this.props.item.read ? 'read' : 'unread'
        return (
            <div className={`notification ${readStatus}`} onClick={this.toggleReadNotification}>
              <div className="notification-mark"></div>
              <div className="notification-text">
                {this.props.item.text}
              </div>
            </div>
        )
    }
})