import React from 'react';

const Record = ({item, field, label}) => {
  console.log(item);
  return (
    <p><span>{label}:</span> <span>{item[field]}</span></p>
  )
}

export default Record;