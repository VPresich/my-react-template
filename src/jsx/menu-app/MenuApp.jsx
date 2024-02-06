import { Routes, Route, NavLink } from 'react-router-dom';
import BookPhone from '../components/bookphone/BookPhone';
import CafeFeedback from '../components/cafe-feedback/CafeFeedback';
import styles from './MenuApp.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

const MenuApp = () => {
  return (
    <div className="container">
      <nav className={styles.menu}>
        <NavLink className={buildLinkClass} to="/">
          Book Phone
        </NavLink>
        <NavLink to="/cafefeedback">Cafe Feedback</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<BookPhone />} />
        <Route path="/cafefeedback" element={<CafeFeedback />} />
      </Routes>
    </div>
  );
};

export default MenuApp;
