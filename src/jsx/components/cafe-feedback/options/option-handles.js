import { KEY_LOCALSTORAGE_FEEDBACK } from '../auxiliary/key-storage';

export const handleReview = (type, prevReviews, setReviews) => {
  const newReviews = {
    ...prevReviews,
    [type]: prevReviews[type] + 1,
  };
  localStorage.setItem(KEY_LOCALSTORAGE_FEEDBACK, JSON.stringify(newReviews));
  setReviews(newReviews);
};

export const handleReset = (initialReviews, setReviews) => {
  setReviews(initialReviews);
  localStorage.removeItem(KEY_LOCALSTORAGE_FEEDBACK);
};
