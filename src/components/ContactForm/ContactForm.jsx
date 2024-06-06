import { useId } from "react";
import { Formik, Form, Field } from 'formik';
import { nanoid } from "nanoid";

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
    >
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type='text' name='name' id={nameFieldId} />
              
        <label htmlFor={numberFieldId}>Number</label>
        <Field type='text' name='number' id={numberFieldId} />
              
			<button type='submit'>Add contact</button>
		</Form>
    </Formik>
  );
};


export default ContactForm



