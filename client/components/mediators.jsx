Mediator = React.createClass({
  render() {
    return (
        <div className="mediator-item">
          <div className="row">
            <div className="col-sm-3 mediator-thumb">
              <div className="mediator-thumb-inner">
              </div>
            </div>
            <div className="col-sm-9 mediator-content">
              <div className="mediator-name">
                {this.props.name}
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
            </div>
          </div>
        </div>
    )  
  }
})

Mediators = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      mediators: Meteor.users.find({'profile.title': 'mediator'}).fetch()
    }
  },
  _renderMediator(data) {
    return <Mediator name={data.profile.firstName + ' ' + data.profile.lastName} 
                     association={data.profile.association} 
                     specialization={data.profile.specialization}
                     address={data.profile.address} />
  },
  render() {
    return (
      <div className="mediator-container container-content">
        {this.data.mediators.map(this._renderMediator)}
      </div>
    )
  }
})  