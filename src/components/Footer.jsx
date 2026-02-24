import { useMemo } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    // Generate floating hearts around the box
    const hearts = useMemo(() => {
        const items = [];
        for (let i = 0; i < 25; i++) {
            items.push({
                id: i,
                left: 5 + Math.random() * 90,
                top: 5 + Math.random() * 90,
                size: 10 + Math.random() * 16,
                delay: Math.random() * 5,
                duration: 3 + Math.random() * 4,
                opacity: 0.2 + Math.random() * 0.4,
            });
        }
        return items;
    }, []);

    // Generate sparkle dots
    const sparkles = useMemo(() => {
        const items = [];
        for (let i = 0; i < 40; i++) {
            items.push({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: 2 + Math.random() * 4,
                delay: Math.random() * 6,
                duration: 2 + Math.random() * 4,
            });
        }
        return items;
    }, []);

    return (
        <footer
            style={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #ff8fcf 0%, #ff4fa3 30%, #c084fc 70%, #ff8fcf 100%)',
                backgroundSize: '300% 300%',
                animation: 'gradientShift 10s ease infinite',
                padding: '80px 20px 60px',
                boxSizing: 'border-box',
            }}
        >
            {/* Sparkle background dots */}
            {sparkles.map((s) => (
                <div
                    key={`sparkle-${s.id}`}
                    style={{
                        position: 'absolute',
                        left: `${s.left}%`,
                        top: `${s.top}%`,
                        width: `${s.size}px`,
                        height: `${s.size}px`,
                        borderRadius: '50%',
                        background: s.id % 3 === 0 ? 'rgba(255,255,255,0.9)' : 'rgba(255,210,240,0.7)',
                        animation: `sparkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
                        pointerEvents: 'none',
                        boxShadow: '0 0 6px rgba(255,255,255,0.5)',
                    }}
                />
            ))}

            {/* Floating hearts around the section */}
            {hearts.map((h) => (
                <div
                    key={`heart-${h.id}`}
                    style={{
                        position: 'absolute',
                        left: `${h.left}%`,
                        top: `${h.top}%`,
                        fontSize: `${h.size}px`,
                        opacity: h.opacity,
                        animation: `float ${h.duration}s ease-in-out ${h.delay}s infinite`,
                        pointerEvents: 'none',
                        filter: 'drop-shadow(0 0 4px rgba(255,79,163,0.4))',
                        zIndex: 1,
                    }}
                >
                    💖
                </div>
            ))}

            {/* Centered content */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    position: 'relative',
                    zIndex: 10,
                }}
            >
                {/* Glassmorphism card */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '24px',
                        padding: 'clamp(32px, 6vw, 56px)',
                        maxWidth: '750px',
                        width: '100%',
                        boxSizing: 'border-box',
                        textAlign: 'center',
                        overflow: 'hidden',
                        boxShadow: '0 0 30px rgba(255, 79, 163, 0.3), 0 0 60px rgba(255, 79, 163, 0.15), 0 8px 32px rgba(0,0,0,0.1)',
                        animation: 'pulse-glow 3s ease-in-out infinite',
                    }}
                >
                    {/* Heading with heartbeat */}
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="heartbeat"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(1.6rem, 5vw, 2.8rem)',
                            fontWeight: 'bold',
                            color: 'white',
                            marginBottom: '24px',
                            lineHeight: '1.3',
                            textShadow: '0 2px 15px rgba(255, 79, 163, 0.5), 0 0 30px rgba(255, 255, 255, 0.3)',
                            wordWrap: 'break-word',
                        }}
                    >
                        💖 Love You Haddu 💖
                    </motion.h2>

                    {/* Sub message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <p
                            style={{
                                fontFamily: 'var(--font-script)',
                                fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)',
                                color: 'rgba(255,255,255,0.95)',
                                lineHeight: '1.8',
                                marginBottom: '8px',
                                wordWrap: 'break-word',
                                overflowWrap: 'break-word',
                            }}
                        >
                            Bahut Jyada 🥹💞
                        </p>
                        <p
                            style={{
                                fontFamily: 'var(--font-script)',
                                fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
                                color: 'rgba(255,255,255,0.9)',
                                lineHeight: '1.8',
                                wordWrap: 'break-word',
                                overflowWrap: 'break-word',
                            }}
                        >
                            And Miss You Too 💌✨
                        </p>
                    </motion.div>
                </motion.div>

                {/* Bottom credit */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1 }}
                    style={{
                        fontFamily: 'var(--font-script)',
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '0.85rem',
                        marginTop: '40px',
                        textAlign: 'center',
                    }}
                >
                    Made with 💖 just for you
                </motion.p>
            </div>
        </footer>
    );
};

export default Footer;
