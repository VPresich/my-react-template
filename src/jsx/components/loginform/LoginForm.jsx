import styles from './LoginForm.module.css';
import { useId } from 'react';

const LoginForm = ({ onSubmit }) => {
  const loginId = useId();
  const passwordId = useId();

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    // Викликаємо пропс onSubmit
    onSubmit({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  return (
    <form className={styles.loginform} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor={loginId}>
        Login
      </label>
      <input className={styles.input} type="text" name="login" id={loginId} />
      <label className={styles.label} htmlFor={passwordId}>
        Password
      </label>
      <input
        className={styles.input}
        type="password"
        name="password"
        id={passwordId}
      />
      <button className={styles.button} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
