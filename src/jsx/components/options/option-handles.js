import { KEY_LOCALSTORAGE } from '../../localstorage/key-storage';

export const handleReview = (type, prevReviews, setReviews) => {
  const newReviews = {
    ...prevReviews,
    [type]: prevReviews[type] + 1,
  };
  localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(newReviews));
  setReviews(newReviews);
};

export const handleReset = (initialReviews, setReviews) => {
  setReviews(initialReviews);
  localStorage.removeItem(KEY_LOCALSTORAGE);
};
