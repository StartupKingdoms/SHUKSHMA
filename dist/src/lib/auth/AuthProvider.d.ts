import { interfaces } from "inversify-express-utils";
import { Request, Response, NextFunction } from 'express';
export declare class AuthProvider implements interfaces.AuthProvider {
    private _authService;
    getUser(req: Request, res: Response, next: NextFunction): Promise<interfaces.Principal>;
}
