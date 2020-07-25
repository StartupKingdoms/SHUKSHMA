import { injectable, inject } from "inversify";
import { interfaces } from "inversify-express-utils";
import {Request,Response,NextFunction} from 'express';
import { AuthService } from "./AuthService";
import { IocContainer } from "../IOC/ioc_container";
const authService = inject("AuthService");

@injectable()
export class AuthProvider implements interfaces.AuthProvider {

    private _authService = IocContainer.get_ioc_container().get<AuthService>(Symbol.for("AuthService"));
    // @authService private readonly _authService: AuthService;
    
    public async getUser(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<interfaces.Principal> {
        const token = req.headers["x-auth-token"];
        const user = await this._authService.getUser(token);
        return user;
    }

}