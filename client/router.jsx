FlowRouter.route('/', {
    action(params) {
        ReactLayout.render(App, {
            content: <p>Hey</p>
        })
    }
})

FlowRouter.route('/calendar', {
    action(params) {
        ReactLayout.render(App, {
            content: <Calendar />,
            title: 'Calendario'
        })
    }
})

FlowRouter.route('/mediators', {
    action(params) {
        console.log('mediators')
    }
})
