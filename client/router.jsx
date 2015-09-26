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
            title: 'Acerca de Medi',
            content: <AboutMedi />,
            options: [
                {
                    route: '/about',
                    text: 'Acerca de MEDI'
                },
                {
                    route: '/about/mediation',
                    text: 'Mediación'
                }
            ]
        })
    }
})

FlowRouter.route('/about/mediation', {
    action() {
        ReactLayout.render(App, {
            title: 'Acerca de Medi',
            content: <AboutMediation />,
            options: [
                {
                    route: '/about',
                    text: 'Acerca de MEDI'
                },
                {
                    route: '/about/mediation',
                    text: 'Mediación'
                }
            ]
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
