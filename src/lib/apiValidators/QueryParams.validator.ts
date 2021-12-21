import { ValidationArgs, ValidationErrArgs } from './ApiValidations'

export function queryValidator(querySchema : Array<ValidationArgs>, query:any)  : Array<ValidationErrArgs> | any {
    
    const errorMessageArray : Array<ValidationErrArgs> = querySchema.map((element : ValidationArgs)=>{
        
        const elementError : ValidationErrArgs = {}
        
        if (element.required) {
            
            query.hasOwnProperty(element.key) ? "" :elementError.keyError = ` '${element.key}' is not present on QueryParam`;               //CONDITION CHECK FOR KEY
            typeCheck(element.type,query[element.key]) ? "" : elementError.typeError = `Type of Key '${element.key}' is '${element.type}' does not match to type given in QueryParams`;
            elementError.typeError ? elementError.requiredConditionError = ` '${element.key}' is required but not present on QueryParam` : "";
        
        }else if (query.hasOwnProperty(element.key)) {
        
            query.hasOwnProperty(element.key)?"":elementError.keyError = ` '${element.key}' is not present on QueryParam`;
            typeCheck(element.type,query[element.key]) ? "" : elementError.typeError = `Type of Key '${element.key}' is '${element.type}' does not match to type given in QueryParams`;
            elementError.typeError ? elementError.requiredConditionError = ` '${element.key}' is required but not present on QueryParam` : "";
        
        }
        
        return Object.keys(elementError).length ? elementError : null;   
    
    })

    const errorMessage = errorMessageArray.filter(value => JSON.stringify(value) !== '{}');

    return errorMessage.length ? errorMessage : null 

}

function typeCheck(type : string, param : any) {
    
    if (type.toLowerCase() == 'array') {
        return Array.isArray(param)     //CONDITION CHECK FOR TYPE
    }else{
        return (typeof(param) === `${type}`)   //CONDITION CHECK FOR TYPE
    }

}