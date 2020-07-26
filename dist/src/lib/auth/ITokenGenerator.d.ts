export interface ITokenGenerator {
    signToken(data: object): string;
}
