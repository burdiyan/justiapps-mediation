CasesList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let currentUser = Meteor.user()
    return {
        cases: Cases.find({
            'currentUser.profile.title': currentUser.profile.username
        }).fetch()
    }
  },

  render() {
    return (
        <p>{this.data.cases}</p>
    )
  }
})  