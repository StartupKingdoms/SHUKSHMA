import { interfaces } from "inversify-express-utils";

export interface AuthService {
    getUser(token):Promise<interfaces.Principal>;
}