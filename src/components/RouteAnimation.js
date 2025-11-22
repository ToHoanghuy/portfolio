import React, { useEffect, useRef, useState } from 'react';
import './RouteAnimation.css';

// Simple SVG route animation with two scenarios
export default function RouteAnimation() {
  const [mode, setMode] = useState('bike'); // 'bike' | 'metro'
  const [playing, setPlaying] = useState(true);
  const bikePathRef = useRef(null);
  const metroPathRef = useRef(null);
  const runnerRef = useRef(null);
  const reqRef = useRef(0);
  const startTimeRef = useRef(0);
  const progressRef = useRef(0); // 0..1

  const duration = 7000; // ms per full route

  const reset = () => {
    progressRef.current = 0;
    startTimeRef.current = performance.now();
  };

  useEffect(() => { reset(); }, [mode]);

  useEffect(() => {
    const animate = (t) => {
      if (!playing) return;
      if (!runnerRef.current) return;
      const path = mode === 'bike' ? bikePathRef.current : metroPathRef.current;
      if (!path) return;
      if (!startTimeRef.current) startTimeRef.current = t;
      const elapsed = (t - startTimeRef.current);
      const p = (elapsed % duration) / duration; // loop
      progressRef.current = p;

      const len = path.getTotalLength();
      const pt = path.getPointAtLength(len * p);
      const prev = path.getPointAtLength(Math.max(0, len * p - 1));
      const angle = Math.atan2(pt.y - prev.y, pt.x - prev.x) * 180 / Math.PI;
      runnerRef.current.setAttribute('transform', `translate(${pt.x}, ${pt.y}) rotate(${angle})`);
      reqRef.current = requestAnimationFrame(animate);
    };
    reqRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqRef.current);
  }, [playing, mode]);

  const replay = () => { reset(); setPlaying(false); setTimeout(() => setPlaying(true), 50); };

  return (
    <div className="route-anim">
      <div className="route-toolbar">
        <button className={`route-btn ${mode==='bike'?'active':''}`} onClick={() => setMode('bike')}>Xe máy → nhà xe → đi bộ</button>
        <button className={`route-btn ${mode==='metro'?'active':''}`} onClick={() => setMode('metro')}>Metro → Cổng B → đi bộ</button>
      </div>
      <div className="route-stage">
        <div className="legend">
          <span className="legend-dot bike"></span> Xe máy
          <span className="legend-dot metro"></span> Metro
        </div>
        <svg viewBox="0 0 1000 420" preserveAspectRatio="xMidYMid meet">
          {/* Campus simplified boxes */}
          <g fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1">
            <rect x="680" y="120" width="120" height="80" rx="10" />
            <text x="740" y="165" fill="#cfd5f2" fontSize="12" textAnchor="middle">Toà B</text>
            <rect x="540" y="220" width="110" height="70" rx="10" />
            <text x="595" y="260" fill="#cfd5f2" fontSize="12" textAnchor="middle">Nhà xe</text>
            <rect x="120" y="340" width="110" height="50" rx="10" />
            <text x="175" y="370" fill="#cfd5f2" fontSize="12" textAnchor="middle">Ga Metro</text>
            <rect x="850" y="40" width="100" height="50" rx="10" />
            <text x="900" y="70" fill="#cfd5f2" fontSize="12" textAnchor="middle">Cổng B</text>
          </g>

          {/* Paths */}
          <path ref={bikePathRef} className="route-path dash" d="M 100 380 C 220 360, 340 320, 460 300 S 660 220, 720 180" />
          <path ref={metroPathRef} className="route-path metro dash" d="M 140 360 C 300 300, 520 220, 880 80 S 740 160, 720 180" />

          {/* runner icon following path */}
          <g ref={runnerRef} className="runner">
            <circle r="8" fill="#fff" />
            <text className="runner-icon" x="12" y="5">🏃‍♂️</text>
          </g>
        </svg>
      </div>
      <div className="route-controls">
        <button onClick={() => setPlaying((p) => !p)}>{playing ? 'Tạm dừng' : 'Tiếp tục'}</button>
        <button onClick={replay}>Chạy lại</button>
      </div>
    </div>
  );
}
