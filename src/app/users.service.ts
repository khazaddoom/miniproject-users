import { User } from './user.model';

export class UserManagementService {
    
    private users: User[] = [
        { name: 'Ganesh', emailAddress: 'ganesh.a@juegostuido.com', fullName: 'Ganesh S Acharya' },
        { name: 'Abhijith', emailAddress: 'abhijith.s@juegostuido.com', fullName: 'Abhijith Shetty' },
        { name: 'Ashwath', emailAddress: 'ashwath.an@juegostuido.net', fullName: 'Ashwath AN' },
        { name: 'Nayana', emailAddress: 'nayana.s@juegostuido.net', fullName: 'Nayana Shetty' }
    ];

    getUsers(): User[] {
        return this.users.slice();
    }
}