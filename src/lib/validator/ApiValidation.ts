import { Request, Response, NextFunction } from 'express';
import {bodyValidator} from './Body.Validator';
import {headerValidator} from './Header.Validator';
import {paramsValidator} from './Params.validator';
import {queryValidator} from './QueryParams.validator';
import { BadRequestException } from '../exceptions';
import {ApiDocWriter} from './documentation'

export interface ValidationErrArgs{
    keyError? : string;
    typeError? : string;
    requiredConditionError? : string
}

export interface ValidationArgs {
    key : string;
    type : string;
    required : Boolean;
    condition? : string;
    example:any;
}

export interface ValueObject {
    meta ?: Object;
    body  ?: Array<ValidationArgs>;
    header ?: Array<ValidationArgs>;
    params ?: Array<ValidationArgs>;
    queryParams ?: Array<ValidationArgs>;
}

export interface ErrorMessageObject{
    bodyValidationError ?: any;
    headerValidationError ?: Array<ValidationErrArgs>;
    paramsValidationError ?: Array<ValidationErrArgs>;
    queryValidationError ?: Array<ValidationErrArgs>;
}

/**
 * dont use default export ;)
 * https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad
 */
export function validator(schema:ValueObject) {

    // ApiDocWriter(schema)
    // const metaSchema : Object = schema.meta || null
    return function validator(
        target: any,
        key: string,
        descriptor: PropertyDescriptor
    ) {

        const original = descriptor.value ;
        descriptor.value = function (req: Request, res: Response, next: NextFunction) {

            const bodyValidation : any   = schema.body ? bodyValidator(schema.body, req.body) : null;
            const headerValidation : Array<ValidationErrArgs> = schema.header ?  headerValidator(schema.header, req.header) : null;
            const paramsValidation : Array<ValidationErrArgs> = schema.params ?  paramsValidator(schema.params, req.params) : null;
            const queryValidation : Array<ValidationErrArgs>  = schema.queryParams ?  queryValidator(schema.queryParams, req.query) : null;

            const message : ErrorMessageObject = errorMessage(bodyValidation, headerValidation, paramsValidation, queryValidation)
            if (message) {
                res.status(400).send(message)
                return original.call(this, req, res, next);
            }
            return original.call(this, req, res, next);
        }
    };
}

function errorMessage(
    bodyValidation : any,
    headerValidation : Array<ValidationErrArgs>,
    paramsValidation : Array<ValidationErrArgs>, 
    queryValidation : Array<ValidationErrArgs>
){
    
    const message : ErrorMessageObject = {}

    if (bodyValidation.error) {
        message.bodyValidationError = bodyValidation.error.details[0].message;
    }

    if (headerValidation) {
        message.headerValidationError = headerValidation ;
    }

    if (paramsValidation) {
        message.paramsValidationError = paramsValidation ;
    }

    if (queryValidation) {
        message.queryValidationError = queryValidation ;
    }
    //https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
    for(const i in message) return message;
    return null;
}