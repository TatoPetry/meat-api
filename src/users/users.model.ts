const users = [
    {name: 'Josefino', email: 'josefino@gmail.com'},
    {name: 'Mariano', email: 'josefino@gmail.com'},
    {name: 'Creyson', email: 'josefino@gmail.com'},
    {name: 'Mathias', email: 'josefino@gmail.com'},
    {name: 'Pau', email: 'josefino@gmail.com'}
]

export class User {
    static findAll(): Promise<any> {
        return Promise.resolve(users);

    }
}