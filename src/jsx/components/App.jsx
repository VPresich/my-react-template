import { useState, useEffect } from 'react';

import Description from './description/Description';
import './App.css';
import Options from './options/Options';
import Feedback from './feedback/Feedback';
import { KEY_LOCALSTORAGE } from '../localstorage/key-storage';

const App = () => {
  const initialReviews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [reviews, setReviews] = useState(initialReviews);

  const handleReview = type => {
    setReviews(prevReviews => {
      const newReviews = {
        ...prevReviews,
        [type]: prevReviews[type] + 1,
      };
      localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(newReviews));
      return newReviews;
    });
  };

  const handleReset = () => {
    setReviews(initialReviews);
    localStorage.removeItem(KEY_LOCALSTORAGE);
  };

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE));
    if (storedReviews) {
      setReviews(storedReviews);
    }
  }, []);

  return (
    <div>
      <Description />
      <Options
        onReview={handleReview}
        onReset={handleReset}
        reviews={reviews}
      />
      <Feedback reviews={reviews} />
    </div>
  );
};

export default App;
