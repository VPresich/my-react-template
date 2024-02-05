import styles from './Options.module.css';
import OptionButton from './OptinButton';
import { totalFeedback } from '../feedback-utils/utils';

const Options = ({ onReview, onReset, reviews }) => {
  return (
    <div className={styles.options}>
      <OptionButton onClick={() => onReview('good')}>Good</OptionButton>
      <OptionButton onClick={() => onReview('neutral')}>Neutral</OptionButton>
      <OptionButton onClick={() => onReview('bad')}>Bad</OptionButton>
      {totalFeedback(reviews) === 0 ? null : (
        <OptionButton onClick={onReset}>Reset</OptionButton>
      )}
    </div>
  );
};

export default Options;
