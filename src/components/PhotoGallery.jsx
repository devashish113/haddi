import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const captions = [
    "Absolutely Stunning 💖",
    "She's Gorgeous 🌸",
    "My Whole World 💕",
    "Prettiest Ever ✨",
    "Queen Vibes 👑",
    "Can't Stop Staring 🩷",
    "So Beautiful 🦋",
    "Main Character 💫",
    "Heart Stealer 💗",
    "Perfection 🌹",
    "Dreamy Girl 💝",
    "My Favorite Face 😍",
];

const imageFiles = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpeg',
    'pic4.jpg',
    'pic5.jpeg',
    'pic6.jpg',
    'pic7.jpg',
    'pic8.jpeg',
    'pic9.jpg',
    'pic10.jpg',
    'pic11.jpeg',
    'pic12.jpg',
];

const PhotoGallery = () => {
    const [loadedImages, setLoadedImages] = useState([]);

    useEffect(() => {
        const imgs = imageFiles.map((file, index) => ({
            src: `/images/${file}`,
            caption: captions[index % captions.length],
            id: index + 1,
        }));
        setLoadedImages(imgs);
    }, []);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.12 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section
            id="gallery"
            className="relative overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #fff5f9 0%, #ffe8f5 50%, #fff5f9 100%)',
                padding: '80px 0',
            }}
        >
            {/* Centered content wrapper */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    padding: '0 20px',
                    boxSizing: 'border-box',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '48px', maxWidth: '600px' }}
                >
                    <h2
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                            fontWeight: 'bold',
                            color: '#ff4fa3',
                            marginBottom: '12px',
                            lineHeight: '1.2',
                        }}
                    >
                        Her Amazing Pics 📸
                    </h2>
                    <p
                        style={{
                            fontFamily: 'var(--font-script)',
                            fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
                            color: '#f472b6',
                        }}
                    >
                        The most beautiful girl in the world — every angle, every moment
                    </p>
                </motion.div>

                {/* Image grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                        gap: '20px',
                        maxWidth: '1100px',
                        width: '100%',
                        boxSizing: 'border-box',
                    }}
                >
                    {loadedImages.map((image) => (
                        <motion.div
                            key={image.id}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="group"
                            style={{
                                position: 'relative',
                                background: 'rgba(255, 255, 255, 0.5)',
                                border: '2px solid rgba(255, 143, 207, 0.2)',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                boxShadow: '0 4px 20px rgba(255, 79, 163, 0.08)',
                            }}
                        >
                            {/* Image with fixed aspect ratio */}
                            <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
                                <img
                                    src={image.src}
                                    alt={image.caption}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block',
                                        transition: 'transform 0.7s ease-out',
                                    }}
                                    className="group-hover:scale-110"
                                    loading="lazy"
                                />

                                {/* Hover overlay */}
                                <div
                                    className="opacity-0 group-hover:opacity-100"
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(255,79,163,0.7), transparent)',
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        justifyContent: 'center',
                                        transition: 'opacity 0.5s ease',
                                    }}
                                >
                                    <p
                                        style={{
                                            fontFamily: 'var(--font-script)',
                                            color: 'white',
                                            fontSize: '1.1rem',
                                            paddingBottom: '16px',
                                            textShadow: '0 2px 8px rgba(0,0,0,0.2)',
                                        }}
                                    >
                                        {image.caption}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom caption */}
                            <div style={{ padding: '10px', textAlign: 'center' }}>
                                <p
                                    style={{
                                        fontFamily: 'var(--font-script)',
                                        fontSize: '0.85rem',
                                        color: 'rgba(244, 114, 182, 0.7)',
                                    }}
                                >
                                    {image.caption}
                                </p>
                            </div>

                            {/* Pink glow border on hover */}
                            <div
                                className="group-hover:border-pink-400/50 group-hover:shadow-[0_0_20px_rgba(255,79,163,0.25)]"
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    borderRadius: '16px',
                                    border: '2px solid transparent',
                                    transition: 'all 0.5s ease',
                                    pointerEvents: 'none',
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PhotoGallery;
