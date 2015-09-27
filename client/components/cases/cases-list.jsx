CasesList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let currentUser = Meteor.user()
    let profileTitle = currentUser.profile.title
    let query = {}
    query[profileTitle] = currentUser.username
    if (profileTitle == 'customer') {
      query = { 'customers': {$in: [currentUser.username] } }
    }
    return {
        cases: Cases.find(query).fetch()
    }
  },

  _renderCase(data) {
    return <Case item={data} key={data._id} />
  },

  render() {
    if (this.data.cases.length === 0) {
      return <p>No hay casos</p>
    }

    return (
      <div className="container">
        <div className="case-container container-content">
          <a href="/cases/new">Añadir caso</a>
          {this.data.cases.map(this._renderCase)}
        </div>
      </div>
    )
  }
})  