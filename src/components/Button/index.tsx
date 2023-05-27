import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

type TPropsButton = {
  onClIick?: (event: React.SyntheticEvent) => void;
  type: TButtons;
  children?: React.ReactNode;
  href?: string;
  refresh?: boolean;
};

const Button: React.FC<TPropsButton> = ({
  href,
  onClIick,
  children,
  refresh,
  type,
}): JSX.Element => {
  const buttonClass = `button button--${type}`;

  if (href) {
    return (
      <BorderButton type={type}>
        {refresh && (
          <a href={href}>
            <button className={`${buttonClass}`} onClick={onClIick}>
              {children}
            </button>
          </a>
        )}
        {!refresh && (
          <Link to={href}>
            <button className={`${buttonClass}`} onClick={onClIick}>
              {children}
            </button>
          </Link>
        )}
      </BorderButton>
    );
  }
  return (
    <BorderButton type={type}>
      <button className={`${buttonClass}`} onClick={onClIick}>
        {children}
      </button>
    </BorderButton>
  );
};

const BorderButton: React.FC<{
  type: TButtons;
  children: React.ReactNode;
}> = ({ children, type }): JSX.Element => {
  return <div className={`button__border--${type}`}>{children}</div>;
};

export default Button;
