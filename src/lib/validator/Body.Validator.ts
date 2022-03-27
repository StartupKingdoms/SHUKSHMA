import * as Joi from 'joi'

export function bodyValidator(bodySchema: any, body:any) {    
    const JoiSchema = Joi.object().keys(bodySchema)
    return JoiSchema.validate(body)
}