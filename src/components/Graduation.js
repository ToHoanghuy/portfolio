import React from 'react';
import './Graduation.css';
import { FaPhone, FaMotorcycle, FaSubway, FaClock } from 'react-icons/fa';
// MapViewer removed: use static map image instead
import CelebrationEffects from './CelebrationEffects';
import EventCountdown from './EventCountdown';
import { motion } from 'framer-motion';

function Graduation() {
    const contacts = [
        {
            name: 'Số điện thoại',
            phone: '0366441295',
            phoneNumber: '0366441295',
            avatar: '👨‍🎓'
        },
        {
            name: 'Zalo',
            phone: '0386441295',
            phoneNumber: '0386441295',
            avatar: '👩‍🎓'
        },
    ];

    const generateCalendar = () => {
        // Compute November calendar for the graduation year (2025)
        const year = 2025;
        const monthIndex = 10; // November (0 = Jan)

        // Days in November (handles leap years correctly)
        const daysInNovember = new Date(year, monthIndex + 1, 0).getDate();

        // JS getDay(): 0 = Sun, 1 = Mon, ... 6 = Sat
        // We use 0 = Mon ... 6 = Sun in the UI, so convert accordingly
        const jsDay = new Date(year, monthIndex, 1).getDay();
        const startDay = (jsDay + 6) % 7; // convert Sun(0)->6, Mon(1)->0, etc.

        const days = [];

        // Add empty cells for days before the 1st
        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        // Add all days of November
        for (let day = 1; day <= daysInNovember; day++) {
            const isEventDay = day === 27;
            days.push(
                <div key={day} className={`calendar-day ${isEventDay ? 'event-day' : ''}`}>
                    {day}
                    {isEventDay && <div className="star">⭐</div>}
                </div>
            );
        }

        return days;
    };

    return (
        <div className="graduation">
            <CelebrationEffects />
            {/* Hero Section */}
            <motion.section className="grad-hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
                <div className="grad-hero-bg">
                    <div className="flower-overlay"></div>
                </div>
                <motion.div className="grad-hero-content" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                    <motion.h1 className="grad-logo" whileHover={{ scale: 1.05 }}>To Hoang Huy</motion.h1>
                    <motion.h2 className="grad-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}>GRADUATION</motion.h2>
                </motion.div>
                <div className="grad-floating-decor">
                    {Array.from({ length: 8 }, (_, i) => (
                        <span key={i} className={`float-shape fs-${i}`} />
                    ))}
                </div>
            </motion.section>

            {/* Invitation Section */}
            <motion.section className="invitation-section section-hero" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
                <div className="invitation-header">
                    <h2>Thân mời bạn đến dự</h2>
                    <h1>LỄ TỐT NGHIỆP</h1>
                </div>
                <motion.div className="graduate-image" whileHover={{ scale: 1.02 }}>
                    <div className="image-placeholder">
                        <img className="graduate-photo" src="/assets/avtt.png" alt="Graduate" />
                    </div>
                </motion.div>
                <EventCountdown />
            </motion.section>

            {/* Calendar Section */}
            <motion.section className="calendar-section section-hero" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
                <h2 className="section-title">Thời gian</h2>
                <div className="calendar-container">
                    <h3 className="calendar-month">Tháng 11</h3>
                    <div className="calendar-header">
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                        <div>Sun</div>
                    </div>
                    <div className="calendar-grid">
                        {generateCalendar()}
                    </div>
                </div>
                <div className="time-details">
                    {[{ from: '16:00' }, { to: '17:00' }].map((t, i) => (
                        <motion.div key={i} className="time-card" whileHover={{ scale: 1.04 }}>
                            <FaClock className="time-icon" />
                            <div>
                                {t?.from ? (
                                    <>
                                        <div className="time-label">từ</div>
                                        <div className="time-value">{t?.from}</div>
                                    </>

                                ) : null}
                                {t?.to ? (
                                    <>
                                        <div className="time-label">đến</div>
                                        <div className="time-value">{t?.to}</div>
                                    </>
                                ) : null}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Location Section */}
            <motion.section className="location-section section-hero" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
                <h2 className="section-title">Địa điểm</h2>
                <div className="location-card">
                    <h3>Trường Đại học Công nghệ Thông tin</h3>
                    <div className="location-image"><img className="school-img" src="/assets/school.png" alt="School" /></div>
                    <div className="map-link-row">
                        <a className="map-link" href="https://www.google.com/maps/search/?api=1&query=10.8556,106.7702" target="_blank" rel="noopener noreferrer">
                            Mở vị trí trên Google Maps
                        </a>
                    </div>
                    <div className="transport-options">
                        <div className="transport-item">
                            <div className="transport-icon"><FaMotorcycle /></div>
                            <div className="transport-details"><h4>Xe máy</h4><p>Đi chuyển đến <strong>Khu ĐHQG, đường Hàn Thuyên</strong>, vào cổng <strong>A</strong></p></div>
                        </div>
                        <div className="transport-item">
                            <div className="transport-icon"><FaSubway /></div>
                            <div className="transport-details"><h4>Metro</h4><p>Đi tàu Metro đến <strong>Ga ĐHQG</strong>, sau đó vào cổng <strong>B</strong></p></div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Map Section - Bản đồ với focus vào 2 vùng cỏ xanh trước Toà C */}
            {/* Map Section - static image with directions script below */}
            <motion.section className="map-section section-hero" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
                <h2 className="section-title">Bản đồ khuôn viên UIT</h2>
                <p className="section-subtitle">Điểm gặp: sân gạch phía trước Toà C</p>
                <div className="static-map">
                    <img src="/assets/map.png" alt="Bản đồ UIT" className="static-map-img" />
                    <div className="map-script">
                        <strong>Hướng dẫn:</strong>
                        <ol>
                            <li>Vào cổng A (đường Hàn Thuyên) và đi thẳng theo trục chính.</li>
                            <li>Gửi xe tại bãi giữ xe bên trái.</li>
                            <li>Đi bộ tới sân gạch phía trước Toà C — chỗ 2 vùng xanh đậm.</li>
                        </ol>
                    </div>
                </div>
            </motion.section>
            {/* Contact Section */}
            <motion.section className="contact-section section-hero" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
                <div className="contacts-grid">
                    {contacts.map((contact, index) => (
                        <motion.div key={index} className="contact-card" whileHover={{ scale: 1.05 }}>
                            <div className="contact-avatar">{contact.avatar}</div>
                            <div className="contact-info">
                                <h3>{contact.name}</h3>
                                <p className="contact-phone">{contact.phone}</p>
                            </div>
                            <a href={`tel:${contact.phoneNumber}`} className="call-button"><FaPhone /></a>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* NGL Section - Gửi lời nhắn ẩn danh */}
            <motion.section
                className="ngl-section section-hero"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
            >
                <div className="ngl-container">
                    <motion.div
                        className="ngl-content"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="ngl-badge">🔥 Hot</div>
                        <div className="ngl-icon">💌</div>
                        <h2 className="ngl-heading">Mình xin nhận lời chúc qua tin nhắn ạ</h2>
                        <p className="ngl-desc">Mọi điều đều có thể nói ra ở đây - tình iu có thể không cần để tên ạ!!</p>
                        <motion.a
                            href="https://ngl.link/huy64710"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ngl-cta-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Gửi tin nhắn ngay</span>
                            <span className="ngl-arrow">→</span>
                        </motion.a>
                        <div className="ngl-stars">
                            {[...Array(20)].map((_, i) => (
                                <span key={i} className="ngl-star" style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`
                                }}>✨</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.section>



            {/* Footer */}
            <footer className="graduation-footer"><p>Made with ❤️ for Graduation Ceremony 2025</p></footer>
        </div>
    );
}

export default Graduation;
