function checkLogin(context, redirect) {
    if (!Meteor.userId()) {
        redirect('/')
    }
}

var protectedRoutes = FlowRouter.group({
    triggersEnter: [checkLogin]
})
protectedRoutes.route('/mediators', {
    action(params) {
        ReactLayout.render(App, {
            title: 'Mediadores',
            content: <Mediators />,
            options: [
                {
                    route: '/mediators',
                    text: 'Mediadores'
                },
                {
                    route: '/mediators',
                    text: 'Búsqueda'
                }
            ]
        })
    }
})
protectedRoutes.route('/calendar', {
    action(params) {
        ReactLayout.render(App, {
            title: 'Calendario',
            content: <Calendar />,
            options: [
                {
                    route: '/calendar',
                    text: 'Agenda'
                },
                {
                    route: '/calendar/timetable',
                    text: 'Mi horario'
                }
            ]
        })
    }
})

protectedRoutes.route('/calendar/timetable', {
    action(params) {
        ReactLayout.render(App, {
            title: 'Calendario',
            content: <CalendarTimetable />,
            options: [
                {
                    route: '/calendar',
                    text: 'Agenda'
                },
                {
                    route: '/calendar/timetable',
                    text: 'Mi horario'
                }
            ]
        })
    }
})

protectedRoutes.route('/cases', {
    action(params) {
        ReactLayout.render(App, {
            title: 'Casos y procedimientos',
            content: <Cases />,
            options: []
        })
    }
})
protectedRoutes.route('/notifications', {
    action(params) {
        ReactLayout.render(App, {
            title: 'Notificaciones',
            content: <NotificationsList />,
            options: [
                {
                    route: '/notifications',
                    text: 'Todo'
                },
                {
                    route: '/notifications/unread',
                    text: 'No leído'
                }
            ]
        })
    }
})
protectedRoutes.route('/notifications/unread', {
    action(params) {
        ReactLayout.render(App, {
            title: 'Notificaciones',
            content: <NotificationsList unread={true} />,
            options: [
                {
                    route: '/notifications',
                    text: 'Todo'
                },
                {
                    route: '/notifications/unread',
                    text: 'No leído'
                }
            ]
        })
    }
})

FlowRouter.route('/', {
    action(params) {
        ReactLayout.render(App, {
            title: 'Bienvenidos',
            content: <Welcome />
        })
    }
})

FlowRouter.route('/about', {
    action(params) {
        ReactLayout.render(App, {
            title: 'Acerca de',
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
            title: 'Acerca de',
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

protectedRoutes.route('/logout', {
    triggersEnter: [function(context, redirect) {
        Meteor.logout()
        redirect('/')
    }],
    action() {

    }
})

FlowRouter.route('/auth/logout', {
    action() {
        Meteor.logout()
    }
})