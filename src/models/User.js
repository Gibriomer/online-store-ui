import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string().required().min(2),
    password: yup.string().required('Password is required'),
    // confirmPassword: yup
    //     .string()  
    //     .oneOf([yup.ref('password'), null], "Passwords don't match")
    //     .required('Confirm Password is required'),
    age: yup
        .number()
        .required()
        .positive()
        .integer()
        .min(18),
    email: yup.string().email()
})