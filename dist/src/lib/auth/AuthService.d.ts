import { interfaces } from "inversify-express-utils";
export interface AuthService {
    getUser(token: any): Promise<interfaces.Principal>;
}
