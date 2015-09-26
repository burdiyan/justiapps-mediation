Message = React.createClass({
    propTypes: {
        text: React.PropTypes.string.isRequired
    },

    getInitialState() {
        return {
            messageStatus: this.props.status
        }
    },

    toggleReadNotification() {
        if (this.state.messageStatus == 'read') {
            return 
        }
        this.setState({messageStatus: 'read'})
    },

    render() {
        return (
            <div className={`notification ${this.state.messageStatus}`} onClick={this.toggleReadNotification}>
              <div className="notification-mark"></div>
              <div className="notification-text">
                {this.props.text}
              </div>
            </div>
        )
    }
})