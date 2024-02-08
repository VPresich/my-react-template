import { NavLink, Routes, Route } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import { useState } from 'react';
import { BookPhone } from '../components/bookphone/BookPhone';
import { CafeFeedback } from '../components/cafe-feedback/CafeFeedback';
import { ProfileSection } from '../components/profile-section/PofileSection';

import styles from './MenuApp.module.css';
import clsx from 'clsx';

export const MenuApp = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleNavLinkClick = to => {
    setActiveLink(to);
  };

  const buildLinkClassName = to => {
    return clsx(styles.link, to === activeLink && styles.active);
  };

  return (
    <div className="container">
      <nav className={styles.menu}>
        <NavLink
          className={buildLinkClassName('/')}
          to="/"
          onClick={() => handleNavLinkClick('/')}
        >
          Profile
        </NavLink>

        <NavLink
          className={buildLinkClassName('/cafefeedback')}
          to="/cafefeedback"
          onClick={() => handleNavLinkClick('/cafefeedback')}
        >
          Cafe Feedback
        </NavLink>

        <NavLink
          className={buildLinkClassName('/bookphone')}
          to="/bookphone"
          onClick={() => handleNavLinkClick('/bookphone')}
        >
          Book Phone
        </NavLink>

        <NavLink
          className={buildLinkClassName('/bookphone')}
          to="/bookphone"
          onClick={() => handleNavLinkClick('/bookphone')}
        >
          Book Phone
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<ProfileSection />} />
        <Route path="/cafefeedback" element={<CafeFeedback />} />
        <Route path="/bookphone" element={<BookPhone />} />
      </Routes>

      {/* <Switch>
        <Route path="/cafefeedback" element={<CafeFeedback />} />
        <Route path="/bookphone" element={<BookPhone />} />
        <Route path="/" element={<ProfileSection />} />
      </Switch> */}
    </div>
  );
};
