Case = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  getInitialState() {
    let customers = Meteor.users.find({
      username: { $in: this.props.item.customers }
    }).fetch()

    let customerNames = []
    for (var customer of customers) {
      customerNames.push(customer.profile.firstName + ' ' + customer.profile.lastName)
    }

    let judge = Meteor.users.findOne({ username: this.props.item.judge })
    let mediator = Meteor.users.findOne({ username: this.props.item.mediator })

    return {
      customerNames: customerNames,
      judge: judge,
      mediator: mediator
    }
  },

  render() {
    return (
      <div className="case-item">
        <div className="case-customer">
          {this.props.item.title}
        </div>

        <div className="case-number">
          <i className="bi_ecommerce-bill-a"></i>
          {this.props.item.caseNumber}
        </div>
        
        <div className="case-specialization">
          <i className="bi_doc-news"></i>
          {this.props.item.specialization}
        </div>
        
        <div className="case-date">
          <i className="bi_time-calendar-a"></i>
          {this.props.item.date.toLocaleString('ES')}
        </div>

        <div className="case-date">
          <i className="bi_user-single-a-group"></i>
          {this.state.customerNames.join(', ')}
        </div>

        <div className="case-date">
          <i className="bi_business-tie"></i>
          {this.state.judge.profile.firstName} {this.state.judge.profile.lastName}
        </div>
        
        <div className="case-mediator">
          <i className="bi_media-glass-a"></i>
          {this.state.mediator.profile.firstName} {this.state.mediator.profile.lastName}
        </div>
        
        <div className="case-description">
          {this.props.item.description}
        </div>
      </div>
    )
  }
})