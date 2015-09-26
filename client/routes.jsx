FlowRouter.route('/', {
    action(params) {
        React.render(<App />, document.getElementById("render-target"))
    }
})