import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import './Navbar.css';

const Navbar: React.FC = (): JSX.Element => {
  return (
    <nav className="navbar">
      <CustomLink to="/upcoming">
        <>Upcoming</>
      </CustomLink>
      <CustomLink to="/completed">
        <>Completed</>
      </CustomLink>
      <CustomLink to="/past">
        <>Past</>
      </CustomLink>
    </nav>
  );
};

const CustomLink: React.FC<{ to: string; children: JSX.Element }> = ({ to, children }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link to={to}>
      <span className={`navbar__item${isActive ? '--active' : ''}`}>{children}</span>
    </Link>
  );
};

export default Navbar;
