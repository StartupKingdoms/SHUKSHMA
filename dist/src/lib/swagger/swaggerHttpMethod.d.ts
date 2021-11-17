import { MethodTypes } from './swagger_http_types';
interface PathOptions {
    path: string;
    method: MethodTypes;
    tag: string;
    summary: string;
    description: string;
    parameters: [
        {
            in: String;
            required: boolean;
            schema: {
                type: "object";
                properties: object;
            };
        }
    ];
    responses: object;
}
export declare function SwaggerHttpMethod(options: PathOptions): (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => void;
export {};
