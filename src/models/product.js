import * as yup from 'yup';

export default yup.object().shape({
    title: yup.string().min(2).required(),
    price: yup.number().required(),
    //image: yup.string().required(),
    categoryId: yup.string().required()
})