import { useDispatch, useSelector} from 'react-redux';
import { ContactItems, Contact, Text, BtnEdit, Btn } from './ContactList.styled'
import { selectFilteredContacts, selectError, selectIsLoading } from '../../redux/selectors';
import { fetchContacts, deleteContact, editContact } from '../../redux/fetchData';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Modal, Input, Button, message, Popconfirm } from 'antd';
import { CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && !error ? (
        <Loader />
      ) : filteredContacts.length === 0 && !error ? (
          <Text>There no matches in phonebook.</Text>
        ) : (
          filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} contact={{ id, name, number }}/>
          ))
      )}
    </ul>
  );
}

function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState(contact.name);
  const [newNumber, setNewNumber] = useState(contact.number);

  const confirm = e => {
    handleDelete(e.target.value);
    message.success('Click on Yes');
  };
  const cancel = e => {
    console.log(e);
    message.error('Click on No');
  };

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const handleEdit = () => {
    setShowModal(true);
  };

  const handleSave = () => {
    setShowModal(false);
    dispatch(editContact({ id: contact.id, name: newName, number: newNumber }));
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  };

  return (
    <ContactItems>
      <Contact>{contact.name}</Contact>
      <Contact href={`tel:${contact.number}`}>
        {contact.number}
      </Contact>
      <BtnEdit onClick={handleEdit}>
       Edit <EditOutlined />
      </BtnEdit>
      <Popconfirm
        title="Delete the contact"
        description="Are you sure to delete this contact?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <Btn>
          Delete <DeleteOutlined />
        </Btn>
      </Popconfirm>

      <Modal
        open={showModal}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            <CloseOutlined /> Cancel
          </Button>,
          <Button key="save" onClick={handleSave}>
            <CheckOutlined /> Save
          </Button>,
        ]}
      >
        <div className="modal-content">
          <label>New Name:</label>
          <Input
            type="text"
            value={newName}
            onChange={handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label>New Number:</label>
          <Input
            type="text"
            value={newNumber}
            onChange={handleNumberChange}
            // pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            pattern=" /^[a-zA-Z0-9]+$/"
						title="Phone number format could be: +1 555 1234567 or 555 1234567."
            required
          />
        </div>
      </Modal>
    </ContactItems>
  );
}