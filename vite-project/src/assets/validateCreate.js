const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const imageUrlRegex = /\.(jpeg|jpg|gif|png)$/;

export const validateCreate=(inputs)=>{
    const errors={}
    if(!nameRegex.test(inputs.name)){
        errors.name="Name must be a valid name"
    }
    if(!imageUrlRegex.test(inputs.img)){
        errors.img="Image must be a valid image"
    }
    if(inputs.age>50){
        errors.age="Age must be greater than 50"
    }
    if(inputs.force<1&&inputs.force>100){
        errors.force="Force must be between 1 and 100"
    }
    return errors
}