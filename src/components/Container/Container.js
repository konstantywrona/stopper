import styles from './Container.module.scss';
import Stopper from '../Stopper/Stopper';
import Button from '../Button/Button';
import React, { useState, useEffect } from 'react';

function Container() {
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(true);
  const [clock, setClock] = useState(0);

  useEffect(() => {
    let timer = null;

    if (start && stop === false) {
      timer = setInterval(() => {
        setClock((clock) => clock + 10);
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [start, stop]);

  const handleStart = () => {
    setStart(true);
    setStop(false);
  };

  const handleStop = () => {
    setStart(false);
    setStop(true);
  };
  const handleReset = () => {
    setStart(false);
    setClock(0);
  };
  return (
    <div className={styles.container}>
      <Stopper time={clock} />
      <div className={styles.buttons}>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handleStop}>Stop</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
}

export default Container;
