Case = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired
    },

    render() {
        return (
            <div>
                {this.props.item.title}
            </div>
        )
    }
})