Label = React.createClass({
    render() {
        return (
            <span className={`label ${this.props.mod}`}>{this.props.text}</span>
        )
    }
})  