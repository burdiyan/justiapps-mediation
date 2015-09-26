MediatorCard = React.createClass({
  render() {
    return (
      <div className="mediator-item">
        <div className="row">
          <div className="col-sm-3 mediator-thumb">
            <img src={`http://api.adorable.io/avatars/100/${Math.random()}`} className="mediator-thumb-inner"></img>
          </div>
          <div className="col-sm-9 mediator-content">
            <div className="mediator-name">
              {this.props.name}
            </div>
            <div className="mediator-association">
              <i className="bi_com-phone-a"></i>
              {this.props.phone}
            </div>
            <div className="mediator-association">
              <i className="bi_doc-briefcase-c"></i>
              {this.props.association}
            </div>
            <div className="mediator-specialization">
              <i className="bi_com-bubble-line-b"></i>
              {this.props.specialization}
            </div>
            <div className="mediator-city">
              <i className="bi_location-pin-map"></i>
              {this.props.address.city}
            </div>
            <div className="mediator-city">
              <i className="bi_location-map"></i>
              {this.props.address.street}
            </div>
          </div>
        </div>
      </div>
    )  
  }
})