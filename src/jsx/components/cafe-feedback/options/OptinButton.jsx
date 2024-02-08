import styles from './OptionButton.module.css';

export const OptionButton = ({ onClick, children }) => {
  return (
    <button className={styles['option-button']} onClick={onClick}>
      {children}
    </button>
  );
};
