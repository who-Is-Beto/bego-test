import React from 'react';
import './Input.css';

const Input: React.FC<{
  value: string;
  name: string;
  type: TInputs;
  placeholder?: string;
  icon?: InputIcons;
  error?: { message: string };
  label?: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
}> = ({ label, handleChange, value, type, placeholder, name, error, icon }): JSX.Element => {
  return (
    <label className="input">
      {label}
      {icon && <img className="input__icon" src={`src/assets/${icon}.svg`} alt={`${icon}`} />}
      <input
        style={icon ? { paddingLeft: '2.5rem' } : {}}
        className="input__field"
        placeholder={placeholder}
        type={type}
        name={name}
        onInput={handleChange as any}
        value={value}
      />
      {error && <p className="">{error.message}</p>}
    </label>
  );
};

export default Input;
