FlowRouter.route('/', {
    action(params) {
        React.render(<App />, document.getElementById("render-target"))
    }
})

FlowRouter.route('/calendar', {
    action(params) {
        console.log('calendar')
    }
})

FlowRouter.route('/mediators', {
    action(params) {
        console.log('mediators')
    }
})
