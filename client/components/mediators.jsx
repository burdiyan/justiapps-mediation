Mediators = React.createClass({
  render() {
    return (
      <div className="mediator-container container-content">
        <div className="mediator-item">
          <div className="row">
            <div className="col-sm-3 mediator-thumb">
              <i className="bi_user-single-round"></i>
            </div>
            <div className="col-sm-9 mediator-content">
              <div className="mediator-name">
                Fulanito de Tal
              </div>
              <div className="mediator-association">
                <i className="bi_doc-briefcase-c"></i>
                Asociacion 2
              </div>
              <div className="mediator-specialization">
                <i className="bi_com-bubble-line-b"></i>
                Civil, Matrimonial, Consumidor
              </div>
              <div className="mediator-city">
                <i className="bi_location-pin-map"></i>
                Madrid
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})  