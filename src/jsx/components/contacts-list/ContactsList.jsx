import styles from './ContactsList.module.css';
import Contact from './Contact';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles['contacts-list']}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
