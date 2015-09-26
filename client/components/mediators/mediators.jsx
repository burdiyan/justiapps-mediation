Mediators = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      mediators: Meteor.users.find({'profile.title': 'mediator'}).fetch()
    }
  },
  _renderMediator(data) {
    return <MediatorCard name={data.profile.firstName + ' ' + data.profile.lastName} 
                         association={data.profile.association} 
                         specialization={data.profile.specialization}
                         address={data.profile.address}
                         phone={data.profile.phone} />
  },
  render() {
    return (
      <div className="mediator-container container-content">
        {this.data.mediators.map(this._renderMediator)}
      </div>
    )
  }
})  