import { ValidationArgs, ValidationErrArgs } from './ApiValidations'

export function headerValidator(headerSchema:Array<ValidationArgs>, header:any) : Array<ValidationErrArgs> | any {
    
    const errorMessageArray : Array<ValidationErrArgs> = headerSchema.map((element : ValidationArgs)=>{
    
        const elementError : ValidationErrArgs = {}
        
        if (element.required) {
            
            header.hasOwnProperty(element.key) ? "" :elementError.keyError = ` '${element.key}' is not present on header`;               //CONDITION CHECK FOR KEY
            typeCheck(element.type,header[element.key]) ? "" : elementError.typeError = `Type of Key '${element.key}' is '${element.type}' does not match to type given in header`;
            elementError.typeError ? elementError.requiredConditionError = ` '${element.key}' is required but not present on header` : "";
        
        }else if (header.hasOwnProperty(element.key)) {
        
            header.hasOwnProperty(element.key)?"":elementError.keyError = ` '${element.key}' is not present on header`;        
            typeCheck(element.type,header[element.key]) ? "" : elementError.typeError = `Type of Key '${element.key}' is '${element.type}' does not match to type given in header`;
            elementError.typeError ? elementError.requiredConditionError = ` '${element.key}' is required but not present on header` : "";
        
        }
        
        return elementError  
    
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