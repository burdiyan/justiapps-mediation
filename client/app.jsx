App = React.createClass({
  render() {
    return (
      <div className="container-fluid" id="main-container">
        <div id="panel-left">
          <div className="panel-header">
            <div id="close-menu-button">
              <i className="bi_interface-cross"></i>
            </div>
          </div>
          <div className="menu-item">
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
          <div className="menu-item">
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
          <div className="menu-item">
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
          <div className="menu-item">
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
          <div className="menu-item line-bottom">
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
          <div className="menu-item menu-bottom">
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
          <div id="hamburger-menu-button">
            <i className="bi_interface-hamburger"></i>
          </div>
          <div id="panel-titlebar-up">{this.props.title}</div>
          {this.props.content}
        </div>
      </div>
    )
  }
});