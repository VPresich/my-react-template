import { useState } from 'react';
import { CustomButton } from '../custom-button/CustomButton';
import styles from './ContactForm.module.css';

export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (name && number) {
      onAddContact({ name, number });

      setName('');
      setPhone('');
    }
  };

  return (
    <form className={styles.contactform} onSubmit={handleSubmit}>
      <div className={styles.info}>
        <label className={styles.label} htmlFor="nameInput">
          Name:
        </label>
        <input
          className={styles.input}
          id="nameInput"
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <label className={styles.label} htmlFor="phoneInput">
          Number:
        </label>
        <input
          className={styles.input}
          id="phoneInput"
          type="text"
          value={number}
          onChange={event => setPhone(event.target.value)}
        />
      </div>
      <CustomButton typeBtn="submit">Add Contact</CustomButton>
    </form>
  );
};
