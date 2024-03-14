import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/fetchData';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form, Input, Button, Text, ErrorMessage } from './ContactForm.styled';

const сontactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(/^[a-zA-Zа-яА-Я'. -]+$/, 'Name may contain only letters.')
    .required('Required'),
  number: Yup.string()
    .trim()
    .min(7, 'Too Short!')
    .matches(/^[0-9+ ()-]+$/, 'Please enter a valid phone number.')
    .required('Required'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onAddContact = (newContact, { resetForm }) => {
    const isExistName = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    const isExistPhone = contacts.some(
      ({ number }) => number === newContact.number
    );

    if (isExistName) {
      Notiflix.Report.warning(
        'Alert',
        `Contact with name ${newContact.name} already exists!`,
        'Ok'
      );
      return;
    }

    if (isExistPhone) {
      Notiflix.Report.warning(
        'Alert',
        `Number ${newContact.number} is already in contacts!`,
        'Ok'
      );
      return;
    }

    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={сontactSchema}
        onSubmit={onAddContact}
      >
        <Form autoComplete="off">
          <Text>
            Name
            <Input
              autoComplete="off"
              type="text"
              id="name"
              name="name"
              placeholder="Jane Doe"
              required
            />
            <ErrorMessage name="name" component="span" />
          </Text>

          <Text>
            Number
            <Input
              autoComplete="off"
              type="tel"
              id="number"
              name="number"
              placeholder="111-11-11"
              required
            />
            <ErrorMessage name="number" component="span" />
          </Text>

          <Button type="submit">Add Contact</Button>
        </Form>
      </Formik>
      <ToastContainer />
    </>
  );
};
