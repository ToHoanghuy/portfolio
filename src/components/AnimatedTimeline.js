import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedTimeline.css';

const milestones = [
  { year: '2021', title: 'Bắt đầu hành trình', details: 'Nhập học UIT, làm quen môi trường mới và những người bạn đầu tiên.' },
  { year: '2022', title: 'Khám phá & Xây dựng', details: 'Tham gia câu lạc bộ, hoàn thành các đồ án nền tảng về lập trình & OOP.' },
  { year: '2023', title: 'Thực tập & Trải nghiệm', details: 'Thực tập hè, va chạm thực tế với quy trình phát triển phần mềm.' },
  { year: '2024', title: 'Bứt phá', details: 'Làm các dự án lớn, tối ưu hoá kỹ năng mobile và web, hoàn thiện khóa luận.' },
  { year: '2025', title: 'Tốt nghiệp', details: 'Hoàn thành chương trình, chuẩn bị bước vào chặng đường nghề nghiệp.' }
];

export default function AnimatedTimeline() {
  return (
    <div className="timeline">
      <div className="timeline-axis" />
      <div className="timeline-items">
        {milestones.map((m, i) => (
          <motion.div
            key={m.year}
            className="timeline-item"
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, scale: .9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: .4 }}
            transition={{ duration: .8, ease: 'easeOut' }}
          >
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-year">{m.year}</div>
              <h4 className="timeline-title">{m.title}</h4>
              <p className="timeline-details">{m.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
