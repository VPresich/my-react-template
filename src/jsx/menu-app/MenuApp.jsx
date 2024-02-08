import { Routes, Route, NavLink } from 'react-router-dom';
import { BookPhone } from '../components/bookphone/BookPhone';
import { CafeFeedback } from '../components/cafe-feedback/CafeFeedback';
import { ProfileSection } from '../components/profile-section/PofileSection';

import styles from './MenuApp.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

export const MenuApp = () => {
  return (
    <div className="container">
      <nav className={styles.menu}>
        <NavLink className={buildLinkClass} to="/">
          Profile
        </NavLink>

        <NavLink className={buildLinkClass} to="/cafefeedback">
          Cafe Feedback
        </NavLink>

        <NavLink className={buildLinkClass} to="/bookphone">
          Book Phone
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<ProfileSection />} />
        <Route path="/cafefeedback" element={<CafeFeedback />} />
        <Route path="/bookphone" element={<BookPhone />} />
      </Routes>
    </div>
  );
};
