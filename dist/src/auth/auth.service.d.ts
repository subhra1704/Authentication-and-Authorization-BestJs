import { UserServices } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';
export declare class AuthService {
    private usersService;
    private readonly jwtService;
    constructor(usersService: UserServices, jwtService: JwtService);
    generateToken(payload: User): string;
    validateUser(username: string, password: string): Promise<any>;
}
