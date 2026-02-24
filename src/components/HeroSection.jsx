import { motion } from 'framer-motion';

const HeroSection = () => {
    const scrollToGallery = () => {
        const gallery = document.getElementById('gallery');
        if (gallery) {
            gallery.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            className="gradient-animated"
            style={{
                position: 'relative',
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                padding: '40px 20px',
                boxSizing: 'border-box',
            }}
        >
            {/* Decorative blurred circles */}
            <div
                style={{
                    position: 'absolute',
                    top: '40px',
                    left: '40px',
                    width: '250px',
                    height: '250px',
                    background: 'rgba(255, 182, 218, 0.3)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    animation: 'pulse 3s ease-in-out infinite',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: '80px',
                    right: '40px',
                    width: '300px',
                    height: '300px',
                    background: 'rgba(192, 132, 252, 0.2)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    animation: 'pulse 3s ease-in-out infinite 1s',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '400px',
                    height: '400px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                }}
            />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                style={{
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 10,
                    maxWidth: '800px',
                    width: '100%',
                }}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, type: 'spring', stiffness: 100 }}
                    className="heartbeat"
                    style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '20px', display: 'inline-block' }}
                >
                    💖
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(2.2rem, 7vw, 4.5rem)',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '20px',
                        lineHeight: '1.2',
                        textShadow: '0 2px 15px rgba(0,0,0,0.1)',
                        wordWrap: 'break-word',
                    }}
                >
                    Happy Birthday Haddi <span className="heartbeat" style={{ display: 'inline-block' }}>💖</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    style={{
                        fontFamily: 'var(--font-script)',
                        fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
                        color: 'rgba(255,255,255,0.9)',
                        marginBottom: '40px',
                        maxWidth: '500px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: '1.6',
                    }}
                >
                    My favorite person in this whole universe.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToGallery}
                    className="glow-button"
                    style={{
                        fontFamily: 'var(--font-body)',
                        padding: '14px 36px',
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px)',
                        color: 'white',
                        fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
                        fontWeight: '500',
                        borderRadius: '50px',
                        border: '1px solid rgba(255,255,255,0.4)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                    }}
                >
                    See Her Beautiful Pics 🌸
                </motion.button>
            </motion.div>

            {/* Bottom gradient fade */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '100px',
                    background: 'linear-gradient(to top, #fff5f9, transparent)',
                    pointerEvents: 'none',
                }}
            />
        </section>
    );
};

export default HeroSection;
