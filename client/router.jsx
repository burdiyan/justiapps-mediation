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
            title: 'Calendario',
            content: <Calendar />
        })
    }
})

FlowRouter.route('/mediators', {
    action(params) {
        ReactLayout.render(App, {
            title: 'Mediadores'
        })
    }
})

FlowRouter.route('/cases', {
    action(params) {
        ReactLayout.render(App, {
            title: 'Mis casos'
        })
    }
})

FlowRouter.route('/notifications', {
    action(params) {
        console.log('notifications')
    }
})

FlowRouter.route('/about', {
    action(params) {
        console.log('about')
    }
})

FlowRouter.route('/profile', {
    action(params) {
        console.log('profile')
    }
})
