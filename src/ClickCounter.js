import React from 'react';
import { useSelector } from 'react-redux';

const ClickCounter = () => {
  const count = useSelector(state => state.counter.value);

  return (
    <div className="click-counter">
      <h2>Счётчик кликов</h2>
      <p>Клики: {count}</p>
    </div>
  );
};

export default ClickCounter;
