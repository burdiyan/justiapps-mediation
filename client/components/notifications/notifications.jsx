Notifications = React.createClass({
  getInitialState() {
    return {
      notifications: [
        'El Juzgado de 1ª Instancia nº 2 de Granada ha enviado notificación al mediador Ernesto San Juan para CONCERTAR CITA INFORMATIVA DE MEDIACIÓN, acordada en el Procedimiento de Separación de Mutuo Acuerdo 515/2015 de Carmen Pérez García y Jordi Andreu Prat.',
        'El Juzgado de 1ª Instancia nº 2 de Granada ha enviado notificación al mediador Ernesto San Juan SOLICITANDO INFORMACIÓN SOBRE LA MARCHA E INCIDENCIAS DEL PROCESO DE MEDIACIÓN. ',
        'El Juzgado de 1ª Instancia nº 2 de Granada ha enviado notificación al mediador Ernesto San Juan COMUNICANDO FIN DEL PLAZO PARA CONCLUIR LA MEDIACIÓN Y SOLICITANDO INFORMACIÓN SOBRE SU RESULTADO.',
        'El Juzgado de 1ª Instancia nº 2 de Granada ha enviado notificación al mediador Ernesto San Juan comunicando el VISTO BUENO CON EL ACUERDO DE MEDIACIÓN/ SU NO CONFORMIDAD CON EL ACUERDO DE MEDIACIÓN, SOLICITANDO SU REVISIÓN Y NUEVA REDACCIÓN POR EL EQUIPO DE MEDIACIÓN.',
        'El Juzgado de 1ª Instancia nº 2 de Granada ha enviado notificación al mediador Santiago Martínez comunicando el VISTO BUENO CON EL ACUERDO DE MEDIACIÓN/ SU NO CONFORMIDAD CON EL ACUERDO DE MEDIACIÓN, SOLICITANDO SU REVISIÓN Y NUEVA REDACCIÓN POR EL EQUIPO DE MEDIACIÓN.',
        'El Juzgado de 1ª Instancia nº 2 de Granada ha enviado notificación al mediador Ernesto San Juan comunicando el VISTO BUENO CON EL ACUERDO DE MEDIACIÓN/ SU NO CONFORMIDAD CON EL ACUERDO DE MEDIACIÓN, SOLICITANDO SU REVISIÓN Y NUEVA REDACCIÓN POR EL EQUIPO DE MEDIACIÓN.',
        'El Juzgado de 1ª Instancia nº 2 de Granada ha enviado notificación al mediador Santiago Martínez para CONCERTAR CITA INFORMATIVA DE MEDIACIÓN, acordada en el Procedimiento de Separación de Mutuo Acuerdo 511/2015 de María de la Villa y José Sanchez García.'
      ]
    }
  },

  _renderNotification(message) {
    return <Message text={message} />
  },

  render() {
    return (
      <div className="notification-container">
        {this.state.notifications.map(this._renderNotification)}
      </div>
    )
  },
})  