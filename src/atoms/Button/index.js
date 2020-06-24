import React, { memo } from 'react';

const Button = ({ label, onClick }) => (<button onClick={onClick}>{label}</button>);

export default memo(Button);
