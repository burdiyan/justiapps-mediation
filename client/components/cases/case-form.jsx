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
            description: ''
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
            <form onSubmit={this.handleSubmit}>
                <input type="text" valueLink={this.linkState('title')} />
                <input type="text" valueLink={this.linkState('caseNumber')} />
                <select valueLink={this.linkState('judge')}>
                    {this.data.judges.map(this._renderOptions)}
                </select>
                <select valueLink={this.linkState('mediator')}>
                    {this.data.mediators.map(this._renderOptions)}
                </select>
                <select valueLink={this.linkState('specialization')}>
                    <option value="Mediación familiar">Mediación familiar</option>
                    <option value="Mediación penal">Mediación penal</option>
                    <option value="Mediación de consumidor">Mediación de consumidor</option>
                    <option value="Mediación de laboral">Mediación laboral</option>
                </select>
                <textarea valueLink={this.linkState('description')} />
                <button type="submit">Crear caso</button>
            </form>
        )
    }
})  