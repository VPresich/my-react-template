import { useState, useEffect } from 'react';
import { Description } from './description/Description';
import { Feedback } from './feedback/Feedback';
import { Options } from './options/Options';
import { KEY_LOCALSTORAGE_FEEDBACK } from './auxiliary/key-storage';
import { handleReview, handleReset } from './options/option-handles';

export const CafeFeedback = () => {
  const initialReviews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [reviews, setReviews] = useState(initialReviews);

  useEffect(() => {
    const storedReviews = JSON.parse(
      localStorage.getItem(KEY_LOCALSTORAGE_FEEDBACK)
    );
    if (storedReviews) {
      setReviews(storedReviews);
    }
  }, []);

  return (
    <div className="section">
      <div className="container">
        <Description />
        <Options
          onReview={type => handleReview(type, reviews, setReviews)}
          onReset={() => handleReset(initialReviews, setReviews)}
          reviews={reviews}
        />
        <Feedback reviews={reviews} />
      </div>
    </div>
  );
};
