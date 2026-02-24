import { motion } from 'framer-motion';

const SpecialMessage = () => {
    return (
        <section
            className="relative overflow-hidden gradient-message"
            style={{ padding: '80px 0' }}
        >
            {/* Decorative elements */}
            <div className="absolute top-10 right-20 w-32 md:w-40 h-32 md:h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-10 left-10 w-40 md:w-60 h-40 md:h-60 bg-pink-300/10 rounded-full blur-3xl" />

            {/* Outer flex centering wrapper */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    padding: '0 20px',
                    boxSizing: 'border-box',
                    position: 'relative',
                    zIndex: 10,
                }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ fontSize: '3rem', marginBottom: '24px', textAlign: 'center' }}
                >
                    💌
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                        fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center',
                        marginBottom: '40px',
                        lineHeight: '1.3',
                        textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                        maxWidth: '700px',
                        wordWrap: 'break-word',
                    }}
                >
                    A Little Something From My Heart
                </motion.h2>

                {/* Message Card - explicitly centered */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    style={{
                        background: 'rgba(255, 255, 255, 0.18)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '20px',
                        padding: 'clamp(24px, 5vw, 48px)',
                        maxWidth: '750px',
                        width: '100%',
                        boxSizing: 'border-box',
                        textAlign: 'center',
                        overflow: 'hidden',
                    }}
                >
                    <p
                        style={{
                            fontFamily: 'var(--font-script)',
                            fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
                            color: 'rgba(255,255,255,0.95)',
                            lineHeight: '2',
                            marginBottom: '20px',
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word',
                        }}
                    >
                        "Haddu, 
                        You are my happiness, my comfort, and my favorite notification.
                        Even a small moment with you feels like unwrapping the best gift life could ever give me."
                    </p>

                    <p
                        style={{
                            fontFamily: 'var(--font-script)',
                            fontSize: 'clamp(0.85rem, 2.2vw, 1.1rem)',
                            color: 'rgba(255,255,255,0.85)',
                            lineHeight: '1.9',
                            marginBottom: '20px',
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word',
                        }}
                    >
                        You make the ordinary feel extraordinary. Your laugh is my favorite sound,
                        your smile is my favorite sight, and your happiness is my favorite mission.
                    </p>

                    <p
                        style={{
                            fontFamily: 'var(--font-script)',
                            fontSize: 'clamp(0.85rem, 2.2vw, 1.1rem)',
                            color: 'rgba(255,255,255,0.85)',
                            lineHeight: '1.9',
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word',
                        }}
                    >
                        Here's to another year of us — of messy mornings, late-night chats,
                        silly conversations, and love that only grows stronger. Happy Birthday, my love, my hddu, my forever best friend, my everything. 🎂💖
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                    style={{
                        fontFamily: 'var(--font-script)',
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                        marginTop: '32px',
                        textAlign: 'center',
                    }}
                >
                    — With all my love, forever and always 💕
                </motion.p>
            </div>
        </section>
    );
};

export default SpecialMessage;
