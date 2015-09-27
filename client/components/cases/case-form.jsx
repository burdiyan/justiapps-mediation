CaseForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState() {
        return {
            title: '', caseNumber: '',
            mediator: '', judge: '', customers: [],
            specialization: '', date: new Date(),
            description: ''
        }
    },
    handleSubmit(event) {
        event.preventDefault()
    },
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" valueLink={this.linkState('title')} />
            </form>
        )
    }
})  