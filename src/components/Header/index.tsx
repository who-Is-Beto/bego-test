import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = (): JSX.Element => {
  const navegate = useNavigate();

  const goBack = (): void => {
    navegate(-1);
  };
  return (
    <header className="header">
      <button className="header__back" onClick={goBack}>
        <img className="header__back__img" src="src/assets/back.svg" alt="Back page button" />
      </button>

      <span className="header__title">Cargo Orders</span>

      <button className="header__bell">
        <img className="header__bell__img" src="src/assets/bell.svg" alt="Filter button" />
      </button>
    </header>
  );
};

export default Header;
