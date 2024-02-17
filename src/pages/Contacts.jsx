import { Helmet, HelmetProvider } from 'react-helmet-async';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { BlurWrap } from './Pages.styled';

export default function Contacts() {
  return (
    <BlurWrap>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </HelmetProvider>
    </BlurWrap>
  );
}