Case = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <div className="case-container container-content">
        {this.props.item.title}
        <div className="case-item">
          <div className="case-customer">
            Jordi Andreu
          </div>
          <div className="case-specialization">
            <i className="bi_doc-news"></i>
            Mediación familiar
          </div>
          <div className="case-date">
            <i className="bi_time-calendar-a"></i>
            18/09/2015
          </div>
          <div className="case-number">
            <i className="bi_ecommerce-bill-a"></i>
            489
          </div>
          <div className="case-mediator">
            <i className="bi_media-glass-a"></i>
            Ernesto San Juan
          </div>
          <div className="case-description">
            <p>Carmen Pérez y Jordi Andreu llevan casados 7 años y tienen un hijo de 3 años. Actualmente viven en Granada pero a Jordi le ha salido un buen trabajo en una consultora en Barcelona y quiere aprovechar la oportunidad para volver a vivir en Barcelona, su ciudad natal.</p>
            <p>Carmen no quiere irse con él, es maestra en Granada, tiene ahí a su familia y su gente, siempre ha vivido ahí y no quiere marcharse.</p>
            <p>Jordi se marchó solo a trabajar a Barcelona hace 6 meses, y desde entonces la situación del matrimonio no hace más que empeorar. No ven salida al asunto,  se pelean por la custodia del niño, ya que sigue viviendo con su madre en Granada, y Jordi se lo quiere traer a Barcelona.</p>
            <p>Después de mucha tensión y separación de facto, acuden al juez para divorciarse.</p>
          </div>
        </div>
      </div>
    )
  }
})