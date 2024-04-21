import { User } from './user.entity';
export declare class UserServices {
    users: User[];
    getUserByUserName(userName: string): Promise<User | undefined>;
}
