import { useEffect, useState, useMemo } from 'react';

const emojis = ['💖', '💖', '💖', '💗', '💕', '🎈', '🎈', '🦴', '🩷', '🌸', '✨'];

const FloatingElements = () => {
  const elements = useMemo(() => {
    const items = [];
    for (let i = 0; i < 50; i++) {
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      const isHeart = emoji.includes('💖') || emoji.includes('💗') || emoji.includes('💕') || emoji.includes('🩷');
      items.push({
        id: i,
        emoji,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 8 + Math.random() * 10,
        size: 12 + Math.random() * 22,
        drift: (Math.random() - 0.5) * 100,
        rotation: Math.random() * 360,
        startOpacity: 0.3 + Math.random() * 0.5,
        glow: isHeart,
      });
    }
    return items;
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {elements.map((el) => (
        <div
          key={el.id}
          style={{
            position: 'absolute',
            bottom: '-40px',
            left: `${el.left}%`,
            fontSize: `${el.size}px`,
            opacity: el.startOpacity,
            animation: `floatUp ${el.duration}s ease-in-out ${el.delay}s infinite`,
            '--drift': `${el.drift}px`,
            '--rotation': `${el.rotation}deg`,
            filter: el.glow ? `drop-shadow(0 0 6px rgba(255, 79, 163, 0.5))` : 'none',
            willChange: 'transform, opacity',
          }}
        >
          {el.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
