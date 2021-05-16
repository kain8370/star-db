import React from 'react';

import errorIndicatorStyle from './error-indicator.module.css';

const ErrorIndicator = () => {
  return (
    <div className={errorIndicatorStyle.container}>
      <h1 className={errorIndicatorStyle.title}>
        BOOM!
      </h1>
      <p className={errorIndicatorStyle.text}>
        somethig has gone terribly wrong
      </p>
      <p className={errorIndicatorStyle.text}>
        (but we already sent droids to fix it)
      </p>
    </div>
  )
}

export default ErrorIndicator;