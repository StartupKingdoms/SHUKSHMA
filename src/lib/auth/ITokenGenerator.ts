import { SignOptions } from "jsonwebtoken";

export interface ITokenGenerator{
    signToken(data:object):string;
}