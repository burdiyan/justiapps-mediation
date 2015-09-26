Meteor.startup(function() {
    // Seed Database
    Meteor.users.remove({})
    // Admin
    Accounts.createUser({
        username: 'burdiyan@gmail.com',
        email: 'burdiyan@gmail.com',
        password: '123456',
        profile: {
            title: 'admin'
        }
    })

    // Judge
    Accounts.createUser({
        username: 'judge',
        email: 'judge@mediation.com',
        password: '123456',
        profile: {
            title: 'judge',
            tribunal: 'Juzgado 1',
            address: {
                city: 'Madrid',
                postal_code: '28000',
                street: 'Calle Bailen, 45'
            }
        }
    })

    // Mediator
    Accounts.createUser({
        username: 'mediator1',
        email: 'mediator1@mediation.com',
        password: '123456',
        profile: {
            title: 'mediator',
            association: 'Asociacion 1',
            association_number: 'ASOC-123456',
            specialization: ['Civil', 'Matrimonial', 'Consumidor'],
            address: {
                city: 'Madrid',
                postal_code: '28001',
                street: 'Calle Sagasta, 20'
            }
        }
    })
})