App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let notificationCount
    if (Meteor.user()) {
      notificationCount = Notifications.find({read: false, forUser: Meteor.user().username}).count() 
    }
    return {
      currentUser: Meteor.user(),
      unreadNotifications: notificationCount
    }
  },

  _renderOption(option, index) {
    if (!option) {
      return null
    }
    return <a key={option+index} href={option.route}>{option.text}</a>
  },

  _renderOptions() {
    if (!this.props.options) {
      return null
    }
    return (
      <div className="panel-titlebar-down">
        {this.props.options.map(this._renderOption)}
      </div>
    )
  },

  // TODO: Fix about when not logged in!!!!!
  _renderContent() {
    if (FlowRouter.current().path.indexOf('/about') === -1 && !Meteor.userId()) {
      return (
        <div className="panel-content">
          <LoginForm />
        </div>
      )
    }

    return (
      <div className="panel-content">
        {this.props.content}
      </div>
    )
  },

  openHamburgerMenu() {
    $("#panel-left").addClass('mobile');
    $("#panel-left").stop().velocity({marginLeft: 0}, {duration: 200});
  },

  closeHamburgerMenu() {
    $("#panel-left").removeClass('mobile');
    $("#panel-left").stop().velocity({marginLeft: -300}, {duration: 200});
  },

  render() {
    return (
      <div className="container-fluid" id="main-container">
        <div id="panel-left">
          <div className="panel-header">
            <div id="close-menu-button" onClick={this.closeHamburgerMenu}>
              <i className="bi_interface-cross"></i>
            </div>
            <div id="branding" onClick={this.openHome}>
              <div id="branding-icon">
                <i className="bi_music-repeat-a"></i>
              </div>
              <div id="branding-title">
                MEDI
              </div>
            </div>
          </div>

          <MenuItem name="Calendario" 
                    route="/calendar" 
                    icon="bi_time-calendar-a" 
                    permissions={['admin', 'judge', 'mediator']} />
          
          <MenuItem name="Mediadores" 
                    route="/mediators" 
                    icon="bi_user-single-a-group"
                    permissions={['admin', 'judge', 'customer']} />
          
          <MenuItem name="Casos" 
                    route="/cases" 
                    icon="bi_user-contact-book"
                    permissions={['admin', 'judge', 'mediator', 'customer']} />
          
          <MenuItem name="Notificaciones" 
                    route="/notifications" 
                    icon="bi_setting-notification"
                    permissions={['admin', 'judge', 'mediator', 'customer']} 
                    count={this.data.unreadNotifications} />
          
          <MenuItem name="Acerca de" 
                    route="/about" 
                    icon="bi_doc-file-line-a" 
                    bottom="line-bottom"
                    permissions={[]} />
          
          <MenuItem name="Logout" 
                    route="/logout" 
                    icon="bi_interface-logout-a" 
                    bottom="menu-bottom"
                    permissions={['admin', 'judge', 'mediator', 'customer']} />
        </div>

        <div id="panel-main">
          <div id="hamburger-menu-button" onClick={this.openHamburgerMenu}>
            <i className="bi_interface-hamburger"></i>
          </div>
          <div className="content-container">
            <div className="panel-titlebar-up">
              {this.props.title}
            </div>

            {this._renderOptions()}
            
            {this._renderContent()}
          </div>
        </div>
      </div>
    )
  },

  openHome() {
    FlowRouter.go('/')
  }
});