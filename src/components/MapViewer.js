import React, { useEffect, useMemo, useRef, useState } from 'react';
import './MapViewer.css';

// Bản đồ tĩnh với focus highlights vào 2 vùng cỏ xanh trước Toà C
export default function MapViewer({ 
  src = '/assets/map.png', 
  alt = 'Bản đồ khuôn viên UIT', 
  minScale = 0.6, 
  maxScale = 3 
}) {
  const viewportRef = useRef(null);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const initialViewRef = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: -300, y: -200 });
  const [panning, setPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0 });
  const translateStart = useRef({ x: 0, y: 0 });

  // Fit image on load and roughly center the area in front of Toà C
  useEffect(() => {
    const img = imgRef.current;
    const viewport = viewportRef.current;
    if (!img || !viewport || !loaded) return;

    const vw = viewport.clientWidth;
    const vh = viewport.clientHeight;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    if (!iw || !ih) return;

    const fitScale = Math.min(vw / iw, vh / ih);
    const initialScale = Math.max(minScale, Math.min(1.2, fitScale * 1.15));

  // Focus towards area in front of Toà C (moved left/up)
  const focusX = iw * 0.72; // ~72% width (moved left)
  const focusY = ih * 0.30; // ~30% height (moved up)
    const tx = vw / 2 - focusX * initialScale;
    const ty = vh / 2 - focusY * initialScale;

    setScale(initialScale);
  setTranslate({ x: tx, y: ty });
  initialViewRef.current = { scale: initialScale, translate: { x: tx, y: ty } };
  }, [loaded, minScale]);

  const onWheel = (e) => {
    e.preventDefault();
    if (!canvasRef.current || !viewportRef.current) return;

    const delta = -e.deltaY;
    const zoomIntensity = 0.0015;
    const newScale = Math.max(minScale, Math.min(maxScale, scale * (1 + delta * zoomIntensity)));

    // Zoom relative to cursor
    const rect = viewportRef.current.getBoundingClientRect();
    const cx = e.clientX - rect.left; // cursor within viewport
    const cy = e.clientY - rect.top;

    const dx = (cx - translate.x) / scale;
    const dy = (cy - translate.y) / scale;

    const nx = cx - dx * newScale;
    const ny = cy - dy * newScale;

    setScale(newScale);
    setTranslate({ x: nx, y: ny });
  };

  const onPointerDown = (e) => {
    e.preventDefault();
    setPanning(true);
    panStart.current = { x: e.clientX, y: e.clientY };
    translateStart.current = { ...translate };
  };
  const onPointerMove = (e) => {
    if (!panning) return;
    const dx = e.clientX - panStart.current.x;
    const dy = e.clientY - panStart.current.y;
    setTranslate({ x: translateStart.current.x + dx, y: translateStart.current.y + dy });
  };
  const onPointerUp = () => setPanning(false);

  const transform = useMemo(() => `translate(${translate.x}px, ${translate.y}px) scale(${scale})`, [translate, scale]);

  // Two highlight spots (approximate positions) in front of Toà C
  // Spots adjusted to be in front of Toà C (moved slightly left/up)
  const spots = [
    { id: 'spot1', x: 0.70, y: 0.32 },
    { id: 'spot2', x: 0.75, y: 0.30 },
  ];

  return (
    <div className="mapv-container" id="campus-map">
      <div
        ref={viewportRef}
        className={`mapv-viewport ${panning ? 'is-panning' : ''}`}
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {!loaded && !error && <div className="mapv-loading">Đang tải bản đồ…</div>}
        {error && (
          <div className="mapv-error">Không tìm thấy ảnh bản đồ. Hãy đặt file tại public/assets/map.png (hoặc đổi src).</div>
        )}
        <div ref={canvasRef} className="mapv-canvas" style={{ transform }}>
          <img
            ref={imgRef}
            className="mapv-img"
            src={src}
            alt={alt}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            draggable={false}
          />

          {/* Focus highlights overlay */}
          <svg className="mapv-overlay" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {spots.map((s) => (
              <g key={s.id}>
                <circle cx={s.x * 100} cy={s.y * 100} r={6} className="focus-core" />
                <circle cx={s.x * 100} cy={s.y * 100} r={10} className="focus-ring" />
                <circle cx={s.x * 100} cy={s.y * 100} r={14} className="focus-glow" />
              </g>
            ))}
          </svg>
        </div>

        {/* Simple hint and minimal controls */}
        <div className="mapv-hint">Cuộn để zoom • Kéo để di chuyển</div>
        <div className="mapv-controls">
          <button className="mapv-btn" aria-label="Phóng to" onClick={() => setScale((s) => Math.min(maxScale, s * 1.15))}>＋</button>
          <button className="mapv-btn" aria-label="Thu nhỏ" onClick={() => setScale((s) => Math.max(minScale, s / 1.15))}>－</button>
          <button className="mapv-btn" aria-label="Đặt lại" onClick={() => {
            if (initialViewRef.current) {
              setScale(initialViewRef.current.scale);
              setTranslate(initialViewRef.current.translate);
            } else {
              setScale(1);
              setTranslate({ x: -300, y: -200 });
            }
          }}>⟳</button>
        </div>

        {/* Textual directions */}
        <div className="mapv-directions">
          <strong>Hướng dẫn đường đi:</strong>
          <ol>
            <li>Vào Cổng 1 (đường Hàn Thuyên) → đi thẳng theo trục chính.</li>
            <li>Gửi xe tại bãi giữ xe bên trái cuối đường.</li>
            <li>Đi bộ đến Toà C.</li>
            <li>Điểm gặp: sân gạch phía trước Toà C</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
