App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },

  _renderOption(option, index) {
    if (!option) {
      return 
    }
    return <a key={option+index} 
    href={option.route}>{option.text}</a>
  },

  openHamburgerMenu() {
    $("#panel-left").addClass('mobile');
    $("#panel-left").stop().velocity({marginLeft: 0});
  },

  closeHamburgerMenu() {
    $("#panel-left").removeClass('mobile');
    $("#panel-left").stop().velocity("reverse");
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

          <MenuItem name="Calendario" route="/calendar" icon="bi_time-calendar-a" />
          <MenuItem name="Mediadores" route="/mediators" icon="bi_user-single-a-group" />
          <MenuItem name="Mis casos" route="/cases" icon="bi_user-contact-book" />
          <MenuItem name="Notificaciones" route="/notifications" icon="bi_setting-notification" />
          <MenuItem name="Acerca de" route="/about" icon="bi_doc-file-line-a" bottom="line-bottom" />
          <MenuItem name="Perfil" route="/profile" icon="bi_setting-gear-a" bottom="menu-bottom" />
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
              {this.props.options.map(this._renderOption)}
            </div>
            <div className="panel-content">
              {this.props.content}
            </div>
          </div>
        </div>
      </div>
    )
  },

  openHome() {
    FlowRouter.go('/')
  }
});