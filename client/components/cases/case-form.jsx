CaseForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin, ReactMeteorData],
    getInitialState() {
        return {
            title: '', 
            caseNumber: '',
            mediator: '', 
            judge: '', 
            customers: [],
            specialization: 'Mediación familiar', 
            date: new Date(),
            description: '',
            open: true
        }
    },
    getMeteorData() {
        return {
            judges: Meteor.users.find({'profile.title': 'judge'}).fetch(),
            mediators: Meteor.users.find({'profile.title': 'mediator'}).fetch(),
            customers: Meteor.users.find({'profile.title': 'customer'}).fetch()
        }
    },
    componentDidMount() {
        this.setState({judge: this.data.judges[0].username, mediator: this.data.mediators[0].username})
    },
    handleSubmit(event) {
        event.preventDefault()
        Meteor.call('addCase', this.state)
        FlowRouter.go('/cases')
    },
    _renderOptions(user) {
        return <option value={`${user.username}`}>{user.profile.firstName} {user.profile.lastName}</option>
    },
    render() {
        return (
            <div className="container-content-small">
            <form className="case-form" onSubmit={this.handleSubmit}>
                <span className="case-form-label"> Título </span>
                <input type="text" placeholder="Título" valueLink={this.linkState('title')} />
                <span className="case-form-label"> Número de caso </span>
                <input type="text" placeholder="Número de caso" valueLink={this.linkState('caseNumber')} />
                <span className="case-form-label"> Juez </span>
                <select valueLink={this.linkState('judge')}>
                    {this.data.judges.map(this._renderOptions)}
                </select>
                <span className="case-form-label"> Mediador </span>
                <select valueLink={this.linkState('mediator')}>
                    {this.data.mediators.map(this._renderOptions)}
                </select>
                <span className="case-form-label"> Especialización </span>
                <select valueLink={this.linkState('specialization')}>
                    <option value="Mediación familiar">Mediación familiar</option>
                    <option value="Mediación penal">Mediación penal</option>
                    <option value="Mediación de consumidor">Mediación de consumidor</option>
                    <option value="Mediación de laboral">Mediación laboral</option>
                </select>
                <textarea placeholder="Descripción" valueLink={this.linkState('description')} />
                <button type="submit">Crear caso</button>
            </form>
            </div>
        )
    }
})  