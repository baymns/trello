import React from 'react';

import './Button.scss'

const Button = ({ children }) => {
  return <button className="button">{children}</button>
};

export default Button;
