import React, { memo } from 'react';

const Element = ({ path, name }) => {
  return (
    <li>
      <img src={path} alt={name} />
    </li>
  );
};

export default memo(Element);
