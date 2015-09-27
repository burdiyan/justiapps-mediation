CaseForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin, ReactMeteorData],
    getInitialState() {
        return {
            title: '', caseNumber: '',
            mediator: '', judge: '', customers: [],
            specialization: '', date: new Date(),
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
    handleSubmit(event) {
        event.preventDefault()
        Meteor.call('addCase', this.state)
    },
    handleJudgeSelect(event) {
        this.setState({judge: event.target.value})
    },
    handleMediatorSelect(event) {
        this.setState({mediator: event.target.value})
    },
    _renderOptions(user) {
        return <option value={`${user.username}`}>{user.profile.firstName} {user.profile.lastName}</option>
    },
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" valueLink={this.linkState('title')} />
                <input type="text" valueLink={this.linkState('caseNumber')} />
                <select onChange={this.handleJudgeSelect}>
                    {this.data.judges.map(this._renderOptions)}
                </select>
                <select onChange={this.handleMediatorSelect}>
                    {this.data.mediators.map(this._renderOptions)}
                </select>
                <button type="submit">Crear caso</button>
            </form>
        )
    }
})  