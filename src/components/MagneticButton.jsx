import { useRef, useState, useEffect } from "react";

export default function MagneticButton({ children, className = "", onClick, href, ...props }) {
  const btnRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isTouchOrReduced, setIsTouchOrReduced] = useState(true);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsTouchOrReduced(isTouch || prefersReduced);
  }, []);

  const handleMouseMove = (e) => {
    if (isTouchOrReduced || !btnRef.current) return;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Max magnetic shift of 8px
    const deltaX = (e.clientX - centerX) * 0.25;
    const deltaY = (e.clientY - centerY) * 0.25;
    setOffset({ x: Math.max(-10, Math.min(10, deltaX)), y: Math.max(-10, Math.min(10, deltaY)) });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const style = isTouchOrReduced
    ? {}
    : {
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: offset.x === 0 && offset.y === 0 ? "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)" : "transform 0.1s ease-out"
      };

  if (href) {
    return (
      <a
        ref={btnRef}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`magnetic-btn inline-flex items-center justify-center ${className}`}
        style={style}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`magnetic-btn inline-flex items-center justify-center ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}
