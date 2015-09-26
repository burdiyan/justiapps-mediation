Meteor.startup(function() {
    // Seed Database
    Meteor.users.remove({})
    CalendarEvents.remove({})
    Notifications.remove({})
    // Admin
    Accounts.createUser({
        username: 'burdiyan@gmail.com',
        email: 'burdiyan@gmail.com',
        password: '123456',
        profile: {
            title: 'admin',
            firstName: 'Alexandr',
            lastName: 'Burdiyan',
        }
    })

    // Judges
    Accounts.createUser({
        username: 'judge1',
        email: 'judge1@mediation.com',
        password: '123456',
        profile: {
            title: 'judge',
            firstName: 'Sergio',
            lastName: 'Garcia',
            tribunal: 'Juzgado 1',
            address: {
                city: 'Madrid',
                postalCode: '28000',
                street: 'Calle Bailen, 45'
            }
        }
    })
    Accounts.createUser({
        username: 'judge2',
        email: 'judge2@mediation.com',
        password: '123456',
        profile: {
            title: 'judge',
            firstName: 'Inmaculada',
            lastName: 'Fernández',
            tribunal: 'Juzgado 1',
            address: {
                city: 'Madrid',
                postalCode: '28000',
                street: 'Calle Bailen, 45'
            }
        }
    })

    // Mediators
    Accounts.createUser({
        username: 'mediator1',
        email: 'ernesto.sanjuan@hmail.com',
        password: '123456',
        profile: {
            phone: '+34 627 43 56 91',
            title: 'mediator',
            firstName: 'Ernesto',
            lastName: 'San Juan',
            association: 'AMEFA Granada',
            association_number: '6523',
            specialization: ['Mediación familiar'],
            address: {
                city: 'Granada',
                postalCode: '28001',
                street: 'C/ Gandía 3'
            }
        }
    })
    Accounts.createUser({
        username: 'mediator2',
        email: 'miguel.garcia@hmail.com',
        password: '123456',
        profile: {
            phone: '+34 611 12 13 14',
            title: 'mediator',
            firstName: 'Miguel',
            lastName: 'García',
            association: 'AMEFA Granada',
            association_number: '10723',
            specialization: ['Mediación asuntos mercantiles'],
            address: {
                city: 'Granada',
                postalCode: '28001',
                street: 'C/ Sevilla, 25'
            }
        }
    })
    Accounts.createUser({
        username: 'mediator3',
        email: 'patricia.sanchez@hmail.com',
        password: '123456',
        profile: {
            phone: '+34 654 32 19 87',
            title: 'mediator',
            firstName: 'Patricia',
            lastName: 'Sánchez',
            association: 'Asprima',
            association_number: '15920',
            specialization: ['Mediación familiar'],
            address: {
                city: 'Madrid',
                postalCode: '28001',
                street: 'Avenida de Burgos, 100'
            }
        }
    })

    // Customers
    Accounts.createUser({
        username: 'catalan',
        email: 'catalan@mediation.com',
        password: '123456',
        profile: {
            title: 'customer',
            firstName: 'Guillem',
            lastName: 'Llull',
            address: {
                city: 'Madrid',
                postalCode: '28004',
                street: 'Calle Mayor, 10'
            }
        }
    })
    Accounts.createUser({
        username: 'andaluza',
        email: 'andaluza@mediation.com',
        password: '123456',
        profile: {
            title: 'customer',
            firstName: 'Mariana',
            lastName: 'Garcia Pérez',
            address: {
                city: 'Madrid',
                postalCode: '28000',
                street: 'Calle Velazquez, 50'
            }
        }
    })

    // Calendar Events
    CalendarEvents.insert({
        title: 'Sesión con el cliente 2',
        start: '2015-09-26T16:15:40Z',
        end: '2015-09-26T18:15:40Z'
    })
    CalendarEvents.insert({
        title: 'Sesión con el cliente 1',
        start: '2015-09-26T12:30:40Z',
        end: '2015-09-26T13:30:40Z'
    })
    CalendarEvents.insert({
        title: 'Cita con el Juez',
        start: '2015-09-27T12:15:40Z',
        end: '2015-09-27T18:15:40Z'
    })
    CalendarEvents.insert({
        title: 'Sesión con mediador',
        start: '2015-09-24T15:00:40Z',
        end: '2015-09-24T18:00:40Z'
    })

    // Notifications
    Notifications.insert({
        text: 'El Juzgado de 1ª Instancia nº 2 de Granada ha enviado notificación al mediador Ernesto San Juan para CONCERTAR CITA INFORMATIVA DE MEDIACIÓN, acordada en el Procedimiento de Separación de Mutuo Acuerdo 515/2015 de Carmen Pérez García y Jordi Andreu Prat.',
        forUser: 'judge1',
        read: true
    })
    Notifications.insert({
        text: 'El Juzgado de 1ª Instancia nº 2 de Granada ha enviado notificación al mediador Ernesto San Juan SOLICITANDO INFORMACIÓN SOBRE LA MARCHA E INCIDENCIAS DEL PROCESO DE MEDIACIÓN. ',
        forUser: 'judge2',
        read: false    
    })
    Notifications.insert({
        text: 'El Juzgado de 1ª Instancia nº 2 de Granada ha enviado notificación al mediador Ernesto San Juan COMUNICANDO FIN DEL PLAZO PARA CONCLUIR LA MEDIACIÓN Y SOLICITANDO INFORMACIÓN SOBRE SU RESULTADO.',
        forUser: 'judge2',
        read: false    
    })
    Notifications.insert({
        text: 'El Juzgado de 1ª Instancia nº 2 de Granada ha enviado notificación al mediador Ernesto San Juan comunicando el VISTO BUENO CON EL ACUERDO DE MEDIACIÓN/ SU NO CONFORMIDAD CON EL ACUERDO DE MEDIACIÓN, SOLICITANDO SU REVISIÓN Y NUEVA REDACCIÓN POR EL EQUIPO DE MEDIACIÓN.',
        forUser: 'judge1',
        read: false    
    })
    Notifications.insert({
        text: 'El Juzgado de 1ª Instancia nº 2 de Granada ha enviado notificación al mediador Santiago Martínez comunicando el VISTO BUENO CON EL ACUERDO DE MEDIACIÓN/ SU NO CONFORMIDAD CON EL ACUERDO DE MEDIACIÓN, SOLICITANDO SU REVISIÓN Y NUEVA REDACCIÓN POR EL EQUIPO DE MEDIACIÓN.',
        forUser: 'mediator1',
        read: false    
    })
    Notifications.insert({
        text: 'El Juzgado de 1ª Instancia nº 2 de Granada ha enviado notificación al mediador Ernesto San Juan comunicando el VISTO BUENO CON EL ACUERDO DE MEDIACIÓN/ SU NO CONFORMIDAD CON EL ACUERDO DE MEDIACIÓN, SOLICITANDO SU REVISIÓN Y NUEVA REDACCIÓN POR EL EQUIPO DE MEDIACIÓN.',
        forUser: 'mediator1',
        read: false    
    })
    Notifications.insert({
        text: 'El Juzgado de 1ª Instancia nº 2 de Granada ha enviado notificación al mediador Santiago Martínez para CONCERTAR CITA INFORMATIVA DE MEDIACIÓN, acordada en el Procedimiento de Separación de Mutuo Acuerdo 511/2015 de María de la Villa y José Sanchez García.',
        forUser: 'mediator2',
        read: false    
    })
    Notifications.insert({
        text: 'El Juzgado de 1ª Instancia nº 2 de Granada ha enviado notificación al mediador Ernesto San Juan para CONCERTAR CITA INFORMATIVA DE MEDIACIÓN, acordada en el Procedimiento de Separación de Mutuo Acuerdo 489/2015 de Leticia García García y Lucas Rodríguez Martín.',
        forUser: 'mediator1',
        read: false    
    })
    Notifications.insert({
        text: 'El Juzgado de 1ª Instancia nº 2 de Madrid ha enviado notificación al mediador Rodrigo García COMUNICANDO FIN DEL PLAZO PARA CONCLUIR LA MEDIACIÓN Y SOLICITANDO INFORMACIÓN SOBRE SU RESULTADO.',
        forUser: 'mediator1',
        read: false    
    })

    // Cases
    Cases.insert({
        title: 'Foobar',
        mediator: '',
        judge: 'judge1',
        open: true,
        parties: [],
        description: ''
    })
})
