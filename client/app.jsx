App = React.createClass({
  // CHAPUZA MODE ON
  openCalendar() {
    FlowRouter.go('/calendar')
  },
  openMediators() {
    FlowRouter.go('/mediators')
  },
  openCases() {
    FlowRouter.go('/cases')
  },
  openNotifications() {
    FlowRouter.go('/notifications')
  },
  openAbout() {
    FlowRouter.go('/about')
  },
  openProfile() {
    FlowRouter.go('/profile')
  },
  // CHAPUZA MODE OFF

  componentDidMount() {
    console.log('Hey THERE')
  },

  openHamburgerMenu() {
    $("#panel-left").stop().velocity({marginLeft: 0})
  },

  closeHamburgerMenu() {
    $("#panel-left").stop().velocity("reverse")
  },

  render() {
    return (
      <div className="container-fluid" id="main-container">
        <div id="panel-left">
          <div className="panel-header">
            <div id="close-menu-button" onClick={this.closeHamburgerMenu}>
              <i className="bi_interface-cross"></i>
            </div>
            <div id="branding">
              <div id="branding-icon"></div>
            </div>
          </div>

          <div className="menu-item" onClick={this.openCalendar}>
            <div className="menu-icon">
              <i className="bi_time-calendar-a"></i>
            </div>
            <div className="menu-text">
              Calendario
            </div>
            <div className="menu-arrow">
              <i className="bi_interface-right"></i>
            </div>
          </div>

          <div className="menu-item" onClick={this.openMediators}>
            <div className="menu-icon">
              <i className="bi_user-single-a-group"></i>
            </div>
            <div className="menu-text">
              Mediadores
            </div>
            <div className="menu-arrow">
              <i className="bi_interface-right"></i>
            </div>
          </div>

          <div className="menu-item" onClick={this.openCases}>
            <div className="menu-icon">
              <i className="bi_user-contact-book"></i>
            </div>
            <div className="menu-text">
              Mis Casos
            </div>
            <div className="menu-arrow">
              <i className="bi_interface-right"></i>
            </div>
          </div>

          <div className="menu-item" onClick={this.openNotifications}>
            <div className="menu-icon">
              <i className="bi_setting-notification"></i>
            </div>
            <div className="menu-text">
              Notificaciones
            </div>
            <div className="menu-arrow">
              <i className="bi_interface-right"></i>
            </div>
          </div>

          <div className="menu-item line-bottom" onClick={this.openAbout}>
            <div className="menu-icon">
              <i className="bi_doc-file-line-a"></i>
            </div>
            <div className="menu-text">
              Acerca de
            </div>
            <div className="menu-arrow">
              <i className="bi_interface-right"></i>
            </div>
          </div>

          <div className="menu-item menu-bottom" onClick={this.openProfile}>
            <div className="menu-icon">
              <i className="bi_setting-gear-a"></i>
            </div>
            <div className="menu-text">
              Perfil
            </div>
            <div className="menu-arrow">
              <i className="bi_interface-right"></i>
            </div>
          </div>
        </div>

        <div id="panel-main">
          <div id="hamburger-menu-button" onClick={this.openHamburgerMenu}>
            <i className="bi_interface-hamburger"></i>
          </div>
          <div className="content-container">
            <div className="panel-titlebar-up">
              {this.props.title}
            </div>
            <div className="panel-titlebar-down">
              <a href="#">Option 1</a>
              <a href="#">Option 2</a>
              <a href="#">Option 3</a>
            </div>
            <div className="panel-content">
              {this.props.content}
            </div>
          </div>
        </div>
      </div>
    )
  }
});