import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from "nanoid";
import * as Yup from 'yup'

import css from './ContactForm.module.css'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  number: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(15, "Too Long!")
    .required("Required!"),
})

const initialValues = {
  name: '',
  number:''
}

const ContactForm = ({ onAdd }) => {
    const nameFieldId = useId();
    const numberFieldId = useId();
       
 const handleSubmit = (values, { resetForm }) => {
   onAdd({
     id: nanoid(),
     name: values.name,
     number: values.number
   });
		resetForm();
  };
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.formWrapper}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type='text' name='name'
          id={nameFieldId} placeholder="Maria Pasinetti" />
        <ErrorMessage 
          name="name" component="span" />
              
        <label htmlFor={numberFieldId}>Number</label>
        <Field type='text' name='number'
          id={numberFieldId} placeholder="111-11-11" />
        <ErrorMessage
          name="number" component="span" />
              
			<button type='submit'>Add contact</button>
		</Form>
    </Formik>
  );
};


export default ContactForm



