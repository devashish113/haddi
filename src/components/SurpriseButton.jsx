import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const SurpriseButton = () => {
    const [revealed, setRevealed] = useState(false);
    const [floatingHearts, setFloatingHearts] = useState([]);

    const launchConfetti = useCallback(() => {
        const duration = 4000;
        const end = Date.now() + duration;
        const pinkColors = ['#ff4fa3', '#ff8fcf', '#c084fc', '#ffffff', '#ffd6ec', '#ff69b4'];

        const frame = () => {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.7 },
                colors: pinkColors,
                shapes: ['circle', 'square'],
                scalar: 1.2,
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.7 },
                colors: pinkColors,
                shapes: ['circle', 'square'],
                scalar: 1.2,
            });
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();

        confetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.6 },
            colors: pinkColors,
            scalar: 1.5,
        });
    }, []);

    const spawnFloatingHearts = useCallback(() => {
        const hearts = [];
        for (let i = 0; i < 25; i++) {
            hearts.push({
                id: Date.now() + i,
                left: Math.random() * 100,
                delay: Math.random() * 2,
                duration: 3 + Math.random() * 4,
                size: 16 + Math.random() * 24,
                emoji: ['💖', '💕', '💗', '💝', '🩷', '🌸'][Math.floor(Math.random() * 6)],
            });
        }
        setFloatingHearts(hearts);
        setTimeout(() => setFloatingHearts([]), 7000);
    }, []);

    const handleSurprise = () => {
        if (!revealed) {
            setRevealed(true);
            launchConfetti();
            spawnFloatingHearts();
        }
    };

    return (
        <section
            className="relative overflow-hidden"
            style={{ background: '#fff5f9', padding: '80px 0' }}
        >
            {/* Floating hearts from surprise */}
            {floatingHearts.map((heart) => (
                <div
                    key={heart.id}
                    className="fixed pointer-events-none z-50"
                    style={{
                        left: `${heart.left}%`,
                        bottom: '-20px',
                        fontSize: `${heart.size}px`,
                        animation: `floatHeart ${heart.duration}s ease-out ${heart.delay}s forwards`,
                    }}
                >
                    {heart.emoji}
                </div>
            ))}

            {/* Centered content wrapper */}
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', maxWidth: '600px', width: '100%' }}
                >
                    <h2
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                            fontWeight: 'bold',
                            color: '#ff4fa3',
                            marginBottom: '16px',
                            lineHeight: '1.3',
                            textAlign: 'center',
                        }}
                    >
                        One More Thing... 🎀
                    </h2>
                    <p
                        style={{
                            fontFamily: 'var(--font-script)',
                            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                            color: '#f472b6',
                            marginBottom: '40px',
                            textAlign: 'center',
                        }}
                    >
                        I've got a little surprise just for you
                    </p>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={handleSurprise}
                    className="glow-button"
                    style={{
                        fontFamily: 'var(--font-body)',
                        padding: '16px 48px',
                        background: 'linear-gradient(135deg, #ff4fa3, #c084fc)',
                        color: 'white',
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        fontWeight: '600',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        border: 'none',
                        marginBottom: '40px',
                    }}
                >
                    {revealed ? 'You Found It! 💖' : 'Click for Surprise 🎁'}
                </motion.button>

                <AnimatePresence>
                    {revealed && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.8 }}
                            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,79,163,0.12), rgba(192,132,252,0.12))',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255,143,207,0.4)',
                                borderRadius: '20px',
                                padding: 'clamp(24px, 5vw, 48px)',
                                maxWidth: '650px',
                                width: '100%',
                                boxSizing: 'border-box',
                                textAlign: 'center',
                                overflow: 'hidden',
                            }}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                                style={{ fontSize: '3.5rem', marginBottom: '20px' }}
                            >
                                🎂
                            </motion.div>
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: 'clamp(1.3rem, 4vw, 2.2rem)',
                                    fontWeight: 'bold',
                                    color: '#ff4fa3',
                                    marginBottom: '16px',
                                    lineHeight: '1.3',
                                }}
                            >
                                Happy Birthday, Beautiful! 🥳
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                                style={{
                                    fontFamily: 'var(--font-script)',
                                    fontSize: 'clamp(0.85rem, 2.2vw, 1.1rem)',
                                    color: 'rgba(190, 50, 100, 0.8)',
                                    lineHeight: '1.9',
                                    wordWrap: 'break-word',
                                    overflowWrap: 'break-word',
                                }}
                            >
                                pata tha tu khlolegi hi.. hddi, chal ab aa gyi hai to pdh bhi le.. but apne risk pe padhio..😅 Happy birthday hddu, Hmesa khus reh.. mast reh.. enjoy krti reh..😅 Apn dono kayi saal se.. ek dusre ke emotional support ban kr khre hain.. aage bhi khade rehenge.. Main tera emotional support hua ya nhi.. vo to nhi malum.. pr tu hai yaar..🥺 Dekh apn dono.. thoda sa door ho gye hain.. due to busy schedules but.. hope hm kbhi emotionaly door nhi hone wale.. Jab bhi time milega.. jb bhi jrurat hogi.. I will be there for you never feel alone..❤️ Kehte hain.. jb saamne wala insaan apna pain share Krna bnd kr de iska mtlb hota h ki u have got a emotional detachment.. tu mujhse kayi chijain share Krna bnd kr di hai.. pr still hoping ki ye sb glt ho.. I really love u yaaara.. tumhe nhi malum ki how much I love u.. tumhe lgta hoga ki main bhi busy ho gya hu.. but aisi baat nhi h.. nhi ho paya hu busy... Kosis to kr rha hu.. Mujhe bs ab achha nhi lgta hr din tujhe disturb Krna....tumhe force Krna.. ki mujhse baat kro.. Afterall it's your life.. But I love u.. I miss u.. most important I need u I am hoping vaisa vkt phir se aaye jb hm dono ek dusre ko pure din ka haal chaal suanaya krte the.. Thoda emotional kr rha hounga sorry... 🤧🤧 Soch kr nhi aaya tha.. but likhte jaa rha hu..🌚🌚 Once again.. Happy Birthday my love, my sis and my bestie, my everything 🥺 Mere best wishes kisi ek din ke mohtaaj nhi hain.. merr wishes hr din tere sath hain..🤌❤️ Mst life enjoy kr.. mujhe updates deti rha kr..😜 pictures bhejti rha kr..🤧🤧 Hddi 🦴
                                You deserve all the love, all the laughter, and all the cake in the world.
                                This website? It's just a tiny piece of how much you mean to me.
                                I love you more than words on a screen could ever say. 💖
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="heartbeat"
                                style={{ marginTop: '24px', fontSize: '1.8rem' }}
                            >
                                💖🎉💖🎉💖
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default SurpriseButton;
