import React from 'react';

export const Button = ({ className = '', disabled = false, label }) => <button className={className} disabled={disabled}>{ label }</button>;

export default Button;
