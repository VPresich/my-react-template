import styles from './OptionButton.module.css';

const OptionButton = ({ onClick, children }) => {
  return (
    <button className={styles['option-button']} onClick={onClick}>
      {children}
    </button>
  );
};

export default OptionButton;
