Message = React.createClass({
    propTypes: {
        text: React.PropTypes.string.isRequired
    },

    getInitialState() {
        return {
            status: 'unread'
        }
    },

    toggleReadNotification() {
        if (this.state.status == 'read') {
            return 
        }

        this.setState({status: 'read'})
    },

    render() {
        return (
            <div className={"notification " + this.state.status} onClick={this.toggleReadNotification}>
              <div className="notification-mark"></div>
              <div className="notification-text">
                {this.props.text}
              </div>
            </div>
        )
    }
})