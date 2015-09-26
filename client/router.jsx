FlowRouter.route('/', {
    action(params) {
        ReactLayout.render(App, {
            title: 'Medi',
            content: <p>Hey</p>
        })
    }
})

FlowRouter.route('/calendar', {
    action(params) {
        ReactLayout.render(App, {
            title: 'Calendario',
            content: <Calendar />,
            options: [
                {
                    route: '/calendar/foo', 
                    text: 'foo'
                },
                {
                    route: '/calendar/bar',
                    text: 'bar'
                }
            ]
        })
    }
})

FlowRouter.route('/mediators', {
    action(params) {
        ReactLayout.render(App, {
            title: 'Mediadores',
            content: <Mediators />
        })
    }
})

FlowRouter.route('/cases', {
    action(params) {
        ReactLayout.render(App, {
            title: 'Mis casos',
            content: <Cases />
        })
    }
})

FlowRouter.route('/notifications', {
    action(params) {
        ReactLayout.render(App, {
            title: 'Notificaciones',
            content: <Notifications />
        })
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
