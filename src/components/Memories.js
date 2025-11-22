import React, { useEffect, useRef, useState } from 'react';
import './Memories.css';

const defaultMemories = [
  { year: '2021', src: '/assets/mem-2021-1.jpg', desc: 'Ngày nhập học, gặp gỡ bạn mới' },
  { year: '2021', src: '/assets/mem-2021-2.jpg', desc: 'Buổi định hướng khoa' },
  { year: '2022', src: '/assets/mem-2022-1.jpg', desc: 'Tham gia CLB và hoạt động' },
  { year: '2022', src: '/assets/mem-2022-2.jpg', desc: 'Đồ án đầu tay' },
  { year: '2023', src: '/assets/mem-2023-1.jpg', desc: 'Thực tập mùa hè' },
  { year: '2023', src: '/assets/mem-2023-2.jpg', desc: 'Cuộc thi học thuật' },
  { year: '2024', src: '/assets/mem-2024-1.jpg', desc: 'Bảo vệ khóa luận' },
  { year: '2025', src: '/assets/mem-2025-1.jpg', desc: 'Ngày lễ tốt nghiệp' },
];

export default function Memories({ items = defaultMemories, autoPlay = true, interval = 3000 }) {
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const [playing, setPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!playing || !trackRef.current) return;
    const tick = () => {
      const track = trackRef.current;
      const next = track.scrollLeft + track.clientWidth + 16; // include gap
      if (next >= track.scrollWidth - track.clientWidth) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollTo({ left: next, behavior: 'smooth' });
      }
    };
    timerRef.current = setInterval(tick, interval);
    return () => clearInterval(timerRef.current);
  }, [playing, interval]);

  return (
    <div className="memories">
      <div className="memories-header">
        <div className="memories-title">Kỷ niệm đại học</div>
        <div className="memories-controls">
          <button onClick={() => setPlaying((p) => !p)}>{playing ? 'Tạm dừng' : 'Tiếp tục'}</button>
        </div>
      </div>
      <div className="memories-track" ref={trackRef}>
        {items.map((m, idx) => (
          <figure className="memory-card" key={idx}>
            <img className="memory-img" src={m.src} alt={m.desc || m.year}
                 onError={(e) => { e.currentTarget.src = '/assets/avt.png'; }} />
            <figcaption className="memory-caption">
              <span className="memory-year">{m.year}</span>
              <span className="memory-desc">{m.desc}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="memories-footer">Kéo ngang để xem thêm — hoặc để tự động chạy</div>
    </div>
  );
}
