
import { setStateCountDownType } from '@/src/interfaces/common.interface';
import { useState, useEffect } from 'react';

interface PropsInterface {
  status: 'start' | 'running' | 'finished' | 'off' | '';
  setStatus: setStateCountDownType;
}

const Countdown = ({ status, setStatus }: PropsInterface) => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (seconds > 0 && status === 'start') {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
    if (seconds === 0) {
      setStatus('finished');
    }
  }, [seconds, status, setStatus]);

  let formattedCount = '00:' + seconds.toString().padStart(2, '0');

  return <>{formattedCount}</>;
};

export default Countdown;