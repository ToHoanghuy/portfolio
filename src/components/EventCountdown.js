import React, { useEffect, useState } from 'react';
import './EventCountdown.css';

// Countdown to graduation ceremony date
export default function EventCountdown({ target = new Date('2025-11-27T11:00:00+07:00') }) {
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(target));
  const [finished, setFinished] = useState(false);

  function calcTimeLeft(date) {
    const diff = +date - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      done: false
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const tl = calcTimeLeft(target);
      setTimeLeft(tl);
      setFinished(tl.done);
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="countdown">
      <h3 className="countdown-title">ĐẾM NGƯỢC NGÀY LỄ</h3>
      <div className="countdown-grid">
        {['days','hours','minutes','seconds'].map((key) => (
          <TimeCell key={key} label={key} value={timeLeft[key]} />
        ))}
      </div>
      {finished && <div className="countdown-finished">ĐÃ ĐẾN NGÀY TỐT NGHIỆP! 🎓</div>}
    </div>
  );
}

function TimeCell({ label, value }) {
  return (
    <div className="count-cell">
      <div className="count-value">
        {String(value).padStart(2,'0').split('').map((d,i) => (
          <span key={i} className="digit" data-value={d}>{d}</span>
        ))}
      </div>
      <div className="count-label">{label}</div>
    </div>
  );
}
