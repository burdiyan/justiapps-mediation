MenuItem = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        route: React.PropTypes.string.isRequired
    },
    navigate() {
        FlowRouter.go(this.props.route)
    },
    render() {
        return (
            <div className={`menu-item ${this.props.bottom}`} onClick={this.navigate}>
              <div className="menu-icon">
                <i className={this.props.icon}></i>
              </div>
              <div className="menu-text">
                {this.props.name}
              </div>
              <div className="menu-arrow">
                <i className="bi_interface-right"></i>
              </div>
            </div>
        )
    }
})