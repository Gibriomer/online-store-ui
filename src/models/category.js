import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string().min(2).required()
});