import React from 'react';

import rowStyle from './row.module.css';

const Row = (props) => {
  return (
  <div className={rowStyle.row} >
    {props.left}
    {props.right}
  </div>
  );
}

export default Row;