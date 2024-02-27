import { useState } from 'react';
import { Form, Input, Button, Text } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { addContact } from '../../redux/fetchData';
import { selectContacts } from '../../redux/selectors';
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// import { useEffect } from 'react';

export default function ContactForm () {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  // const [localError, setLocalError] = useState('null');

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

		if (isNaN(Number(number))) {
			return
		} 
		
		
		const contact = {
      name: name,
      number: number,
    };

    const isContactExist = contacts.find(
      ({name}) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isContactExist) {
      Notiflix.Report.warning(
        'Alert',
        `Contact with name ${contact.name} already exists!`,
        'Ok'
      );
      return;
    }

    const isNumberExist = contacts.find(
      ({number}) => contact.number.replace(/\D/g, '') === number.replace(/\D/g, '')
    );

    if (isNumberExist) {
      Notiflix.Report.warning(
        'Alert',
        `Number ${contact.number} is already in contacts!`,
        'Ok'
      );
			if (isNaN(Number(number))) {
				Notiflix.Report.warning(
					'Alert',
					'Invalid telephone number! Letters cannot be used.',
					'Ok'
				);
			}
      return;
    }

    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

	

	// useEffect(() => {
	// 	if (isNaN(Number(number))) {toast.error ('Invalid telephone number! Letters cannot be used.')};
	// },
	// )

    return (
			<div>
      <Form onSubmit={handleSubmit}>
        <Text>Name</Text>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
        <Text>Number</Text>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
        />
        <Button type="submit">Add Contact</Button>
      </Form>
			<ToastContainer/>
			</div>
    );
}