import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { increment, reset } from './features/counterSlice';

const ClickButton = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    dispatch(increment());
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 300); // Сброс анимации через 300 миллисекунд
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="click-button-container">
      <button
        className={`click-button ${clicked ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        Кликни!👈🏿
      </button>
      <button className="reset-button" onClick={handleReset}>
      Сбросить👎🏿
      </button>
    </div>
  );
};

export default ClickButton;

