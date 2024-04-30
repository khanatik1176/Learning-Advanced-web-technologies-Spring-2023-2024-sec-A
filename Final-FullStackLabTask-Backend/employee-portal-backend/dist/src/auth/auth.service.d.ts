import { Repository } from 'typeorm';
import { Auth } from 'src/entities/auth.entity';
export declare class AuthService {
    private authRepo;
    constructor(authRepo: Repository<Auth>);
    logInEmp(login_data: any): Promise<{
        message: string;
    }>;
}
