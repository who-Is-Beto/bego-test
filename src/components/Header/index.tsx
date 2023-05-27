import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { Images } from '@/constants/images';

const Header: React.FC = (): JSX.Element => {
  const navegate = useNavigate();

  const goBack = (): void => {
    navegate(-1);
  };
  return (
    <header className="header">
      <button className="header__back" onClick={goBack}>
        <img className="header__back__img" src={Images.get('back')} alt="Back page button" />
      </button>

      <span className="header__title">Cargo Orders</span>

      <button className="header__bell">
        <img className="header__bell__img" src={Images.get('bell')} alt="Filter button" />
      </button>
    </header>
  );
};

export default Header;
