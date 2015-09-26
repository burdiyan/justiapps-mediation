LoginForm = React.createClass({
    // mixins: [ReactMeteorData],
    getInitialState() {
        return {
            username: '',
            password: '',
            failed: false
        }
    },
    setUsername(event) {
        this.setState({username: event.target.value})
    },
    setPassword(event) {
        this.setState({password: event.target.value})
    },
    handleSubmit(event) {
        event.preventDefault()
        Meteor.loginWithPassword(this.state.username, this.state.password, (err) => {
            if (err) {
                this.setState({failed: true})
            }
        })
    },
    _renderErrors() {
        if (this.state.failed) {
            return <p className="warning">Usuario o contraseña invalida.</p>
        }
        return null
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
                Iniciar Sesión
              </div>
            </div>
            {this._renderErrors()}
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="username" placeholder="Username" onChange={this.setUsername} value={this.state.username}/>
              <input type="password" name="password" placeholder="Password" onChange={this.setPassword} value={this.state.password}/>
              <button type="submit">Enviar</button>
            </form>
          </div>
        )
    }
})