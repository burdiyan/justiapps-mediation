Notifications = React.createClass({
  render() {
    return (
      <div className="notification-container">
        <div className="notification unread" onClick={this.toggleReadNotification}>
          <div className="notification-mark"></div>
          <div className="notification-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  Aenean massa.
          </div>
        </div>
        <div className="notification unread" onClick={this.toggleReadNotification}>
          <div className="notification-mark"></div>
          <div className="notification-text">
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
          </div>
        </div>
        <div className="notification" onClick={this.toggleReadNotification}>
          <div className="notification-mark"></div>
          <div className="notification-text">
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </div>
        </div>
        <div className="notification unread" onClick={this.toggleReadNotification}>
          <div className="notification-mark"></div>
          <div className="notification-text">
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
          </div>
        </div>
        <div className="notification" onClick={this.toggleReadNotification}>
          <div className="notification-mark"></div>
          <div className="notification-text">
            Integer tincidunt. Cras dapibus.
          </div>
        </div>
        <div className="notification" onClick={this.toggleReadNotification}>
          <div className="notification-mark"></div>
          <div className="notification-text">
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. 
          </div>
        </div>
        <div className="notification unread" onClick={this.toggleReadNotification}>
          <div className="notification-mark"></div>
          <div className="notification-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </div>
        </div>
      </div>
    )
  },
  toggleReadNotification(){
    $.toggleClass('unread');
  }
})  