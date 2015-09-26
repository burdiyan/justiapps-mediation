Welcome = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },
  render() {
      return (
        <div className="container-content-small">
          <div className="branding">
            <div className="branding-icon">
              <i className="bi_music-repeat-a"></i>
            </div>
            <div className="branding-title">
              MEDI
            </div>
            <div className="branding-subtitle">
              Bienvenido
            </div>
          </div>
          <div className="content-small-text">
            <p>Hola, <strong>{this.data.currentUser.profile.firstName}</strong>!</p>
            <p><strong>No pierdas el juicio. Hablando se entiende la gente.</strong></p>
            <p>#MEDIApp</p>
          </div>
        </div>
      )
  }
})