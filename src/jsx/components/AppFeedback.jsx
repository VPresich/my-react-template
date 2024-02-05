// import { useState, useEffect } from 'react';
// import Description from './description/Description';
// import Options from './options/Options';
// import Feedback from './feedback/Feedback';
// import { KEY_LOCALSTORAGE } from '../localstorage/key-storage';
// import { handleReview, handleReset } from './options/option-handles';
import LoginForm from './loginform/LoginForm';

import './App.css';
const App = () => {
  // const initialReviews = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  // const [reviews, setReviews] = useState(initialReviews);

  // useEffect(() => {
  //   const storedReviews = JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE));
  //   if (storedReviews) {
  //     setReviews(storedReviews);
  //   }
  // }, []);

  // return (
  //   <div>
  //     <Description />
  //     <Options
  //       onReview={type => handleReview(type, reviews, setReviews)}
  //       onReset={() => handleReset(initialReviews, setReviews)}
  //       reviews={reviews}
  //     />
  //     <Feedback reviews={reviews} />
  //   </div>
  // );

  // Колбек-функція для обробки сабміту форми

  const handleLogin = userData => {
    console.log(userData);
  };

  return (
    <div>
      <h2>Please login to your account!</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default App;
