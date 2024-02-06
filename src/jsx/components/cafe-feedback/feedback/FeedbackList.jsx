import styles from './FeedbackList.module.css';
const FeedbackList = ({ reviews }) => {
  return (
    <>
      <ul className={styles['feedback-list']}>
        {Object.entries(reviews).map(([type, value]) => (
          <li className={styles.item} key={type}>
            {type}: {value}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FeedbackList;
