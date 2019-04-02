import React, { memo } from 'react';
import { Img } from '../stylized/elementStyle.js';

const Element = ({ path, name }) => {
  return <Img src={path} alt={name} />;
};

export default memo(Element);
