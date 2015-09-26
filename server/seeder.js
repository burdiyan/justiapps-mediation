Meteor.startup(function() {
    // Seed Database
    Meteor.users.remove({})
    CalendarEvents.remove({})
    // Admin
    Accounts.createUser({
        username: 'burdiyan@gmail.com',
        email: 'burdiyan@gmail.com',
        password: '123456',
        profile: {
            title: 'admin',
            firstName: 'Alexandr',
            lastName: 'Burdiyan'
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
        email: 'mediator1@mediation.com',
        password: '123456',
        profile: {
            title: 'mediator',
            firstName: 'Jose',
            lastName: 'Pérez García',
            association: 'Asociacion 1',
            association_number: 'ASOC-123456',
            specialization: ['Civil', 'Matrimonial', 'Consumidor'],
            address: {
                city: 'Madrid',
                postalCode: '28001',
                street: 'Calle Sagasta, 20'
            }
        }
    })
    Accounts.createUser({
        username: 'mediator2',
        email: 'mediator2@mediation.com',
        password: '123456',
        profile: {
            title: 'mediator',
            firstName: 'Fulanito',
            lastName: 'de Tal',
            association: 'Asociacion 2',
            association_number: 'ASOC-1414',
            specialization: ['Civil', 'Matrimonial', 'Consumidor'],
            address: {
                city: 'Madrid',
                postalCode: '28001',
                street: 'Calle Sagasta, 20'
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

    CalendarEvents.insert({
        title: 'Sesión con el cliente 1',
        start: '2015-09-26T16:15:40Z',
        end: '2015-09-26T18:15:40Z'
    })
})