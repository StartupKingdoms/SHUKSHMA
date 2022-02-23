//import { MetaObjectArgs, ValidationArgs } from './ApiValidation'

// "meta":{
//     "path":"/image/:id",
//     "type":"get",
//     "pathname":'image',
//     "apiVersion":"v1"
// },

export function iamValidator(policy:string, headers : any) :  any {

    const iamCheck = headers.authType === "policy" ? policyValueValidation(headers.authValue, policy) : 
    headers.authType === "role" ? roleValueValidation(headers.authValue, policy) :
    headers.authType === "roleGroup" ?  roleGroupValidation(headers.authValue, policy) : true



    return iamCheck
}

function policyValueValidation(authValue: string, policy:string) {
    return authValue===policy
    
}


function roleValueValidation(authValue: Array<string>, policy:string) {

    for (let i:number=0;i<authValue.length;i++){

        if(policy===authValue[i]){
            return true;
        }else{
            return false;
        }
    }
    
}

function roleGroupValidation(authValue: any, policy:string) {
    for (let i:number=0;i<authValue.length;i++){

        if(policy===authValue[i]){
            return true;
        }else{
            return false;
        }
    }
}