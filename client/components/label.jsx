Label = React.createClass({
    render() {
        return (
            <span class={`label ${this.props.mod}`}>{this.props.text}</span>
        )
    }
})  