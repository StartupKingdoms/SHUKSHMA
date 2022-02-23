import { MetaObjectArgs, ValidationArgs } from './ApiValidation'

// "meta":{
//     "path":"/image/:id",
//     "type":"get",
//     "pathname":'image',
//     "apiVersion":"v1"
// },

export function iamValidator(meta: MetaObjectArgs, headers : any) :  any {

    const iamCheck = headers.authType === "policy" ? policyValueValidation(headers.authValue, meta) : 
    headers.authType === "role" ? roleValueValidation(headers.authValue, meta) :
    headers.authType === "roleGroup" ?  roleGroupValidation(headers.authValue, meta) : true



    return iamCheck
}

function policyValueValidation(authValue: string, meta:MetaObjectArgs) {
    
}


function roleValueValidation(authValue: Array<string>, meta:MetaObjectArgs) {
    
}

function roleGroupValidation(authValue: any, meta:MetaObjectArgs) {
    
}