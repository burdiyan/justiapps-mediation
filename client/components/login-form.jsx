LoginForm = React.createClass({
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
                Inicia Sesión
              </div>
            </div>
            <form>
              <input type="text" name="username" placeholder="Username" />
              <input type="password" name="password" placeholder="Password" />
              <button>Enviar</button>
            </form>
          </div>
        )
    }
})