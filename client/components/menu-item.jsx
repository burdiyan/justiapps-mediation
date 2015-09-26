MenuItem = React.createClass({
    mixins: [ReactMeteorData],
    propTypes: {
        name: React.PropTypes.string.isRequired,
        route: React.PropTypes.string.isRequired,
        permissions: React.PropTypes.array.isRequired
    },
    getMeteorData() {
      return {
        currentUser: Meteor.user() || null
      }
    },
    navigate() {
        FlowRouter.go(this.props.route);
        this.automaticCloseMenu();
    },
    automaticCloseMenu() {
      if (window.innerWidth < 768){
        $("#panel-left").removeClass('mobile');
        $("#panel-left").stop().velocity({marginLeft: -300}, {duration: 200});
      }
    },
    _renderItem() {
      return (
          <div className={`menu-item ${this.props.bottom}`} onClick={this.navigate}>
            <div className="menu-icon">
              <i className={this.props.icon}></i>
            </div>
            <div className="menu-text">
              {this.props.name} {this.props.count ? `(${this.props.count})` : ''}
            </div>
            <div className="menu-arrow">
              <i className="bi_interface-right"></i>
            </div>
          </div>
      )
    },
    render() {
      if (this.props.permissions.length == 0) {
        return this._renderItem()
      }

      if (this.props.permissions.length !== 0 && !this.data.currentUser) {
        return null
      }

      if (this.props.permissions.length !== 0 && this.props.permissions.indexOf(this.data.currentUser.profile.title) !== -1) {
        return this._renderItem()
      }

      return null
    }
})