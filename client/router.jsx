FlowRouter.route('/', {
    action(params) {
        ReactLayout.render(App, {
            title: 'Medi',
            content: <p>Hey</p>,
            options: []
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
            content: <Mediators />,
            options: []
        })
    }
})

FlowRouter.route('/cases', {
    action(params) {
        ReactLayout.render(App, {
            title: 'Mis casos',
            content: <Cases />,
            options: []
        })
    }
})

FlowRouter.route('/notifications', {
    action(params) {
        ReactLayout.render(App, {
            title: 'Notificaciones',
            content: <Notifications />,
            options: [
                {
                    route: '',
                    text: 'Hoy'
                },
                {
                    route: '/notifications/all',
                    text: 'Todo'
                }
            ]
        })
    }
})

FlowRouter.route('/about', {
    action(params) {
        ReactLayout.render(App, {
            title: 'Acerca de',
            content: <About />,
            options: []
        })
    }
})

FlowRouter.route('/profile', {
    action(params) {
        ReactLayout.render(App, {
            title: 'Mi Perfil',
            content: <Profile />,
            options: []
        })
    }
})
