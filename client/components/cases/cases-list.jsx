CasesList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let currentUser = Meteor.user()
    let profileTitle = currentUser.profile.title
    return {
        cases: Cases.find({
          profileTitle: currentUser.profile.username
        }).fetch()
    }
  },

  _renderCase(data) {
    return <Case item={data} key={data._id} />
  },

  render() {
    return (
      <div>
        {this.data.cases.map(this._renderCase)}
      </div>
    )
  }
})  