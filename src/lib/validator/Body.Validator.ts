import { ValidationArgs, ValidationErrArgs } from './ApiValidation'

export function bodyValidator(bodySchema:Array<ValidationArgs>, body:any) {
    
    const errorMessageArray : Array<ValidationErrArgs> = bodySchema.map((element : ValidationArgs)=>{
        
        const elementError : ValidationErrArgs = {}

        if (element.required) {
            
            body.hasOwnProperty(element.key) ? "" :elementError.keyError = ` '${element.key}' is not present on body`;               //CONDITION CHECK FOR KEY
            typeCheck(element.type,body[element.key]) ? "" : elementError.typeError = `Type of Key '${element.key}' is '${element.type}' does not match to type given in body's`;
            elementError.typeError ? elementError.requiredConditionError = ` '${element.key}' is required but not present on body` : "";
        
        }else if (body.hasOwnProperty(element.key)) {
        
            body.hasOwnProperty(element.key)?"":elementError.keyError = ` '${element.key}' is not present on body`;                      
            typeCheck(element.type,body[element.key]) ? "" : elementError.typeError = `Type of Key '${element.key}' is '${element.type}' does not match to type given in body's`;
            elementError.typeError ? elementError.requiredConditionError = ` '${element.key}' is required but not present on body` : "";
        
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