import SimplifiedUser from './SimplifiedUser';

interface User extends SimplifiedUser {
    email: string;
    first_name: string;
    last_name: string;
    sobre: string;
    foto: string;
}

export default User;