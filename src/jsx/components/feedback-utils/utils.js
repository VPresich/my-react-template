export const totalFeedback = reviews => {
  return Object.values(reviews).reduce((sum, value) => sum + value, 0);
};

const totalNoBad = (reviews, bad) => {
  return Object.entries(reviews)
    .filter(([key]) => key !== bad)
    .reduce((sum, [, value]) => sum + value, 0);
};

export const positivePercents = (reviews, bad) => {
  return Math.round((totalNoBad(reviews, bad) / totalFeedback(reviews)) * 100);
};
