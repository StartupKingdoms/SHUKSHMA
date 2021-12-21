import { ValidationArgs, ValidationErrArgs } from './ApiValidations'

export function paramsValidator(paramSchema:Array<ValidationArgs>, params:any) : Array<ValidationErrArgs> | any {
    
    const errorMessageArray : Array<ValidationErrArgs> = paramSchema.map((element :ValidationArgs)=>{
        
        const elementError : ValidationErrArgs = {}
        
        if (element.required) {
            
            params.hasOwnProperty(element.key) ? "" :elementError.keyError = ` '${element.key}' is not present on params`;               //CONDITION CHECK FOR KEY
            typeCheck(element.type,params[element.key]) ? "" : elementError.typeError = `Type of Key '${element.key}' is '${element.type}' does not match to type given in params`;
            elementError.typeError ? elementError.requiredConditionError = ` '${element.key}' is required but not present on params` : "";
        
        }else if (params.hasOwnProperty(element.key)) {
        
            params.hasOwnProperty(element.key)?"":elementError.keyError = ` '${element.key}' is not present on params`;                      
            typeCheck(element.type,params[element.key]) ? "" : elementError.typeError = `Type of Key '${element.key}' is '${element.type}' does not match to type given in params`;
            elementError.typeError ? elementError.requiredConditionError = ` '${element.key}' is required but not present on params` : "";
        
        }
        
        return Object.keys(elementError).length ? elementError : null;   
    
    })

    const errorMessage = errorMessageArray.filter(value => value != null);
    
    return errorMessage.length ? errorMessage : null;
        
}

function typeCheck(type : string, param : any) {
    
    if (type.toLowerCase() == 'array') {
        return Array.isArray(param)     //CONDITION CHECK FOR TYPE
    }else{
        return (typeof(param) === `${type}`)   //CONDITION CHECK FOR TYPE
    }

}