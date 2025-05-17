import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHover, setLinkHover] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleMouseEnterLink = () => setLinkHover(true);
    const handleMouseLeaveLink = () => setLinkHover(false);

    const handleMouseLeave = () => setHidden(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Link hover effect
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnterLink);
      link.addEventListener('mouseleave', handleMouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);

      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnterLink);
        link.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
    };
  }, []);

  // Hide default cursor when our custom cursor is active
  useEffect(() => {
    if (!hidden) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'auto';
    }

    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hidden]);

  return (
    <>
      <div
        className={`pointer-events-none fixed z-[999] transition-transform duration-100 ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-75' : 'scale-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Main cursor */}
        <div
          className={`rounded-full ${
            linkHover ? 'h-8 w-8 bg-primary/20' : 'h-4 w-4 bg-primary/30'
          } transition-all duration-200`}
        />

        {/* Cursor dot */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
            linkHover ? 'h-1.5 w-1.5 bg-primary' : 'h-1 w-1 bg-primary'
          } transition-all duration-200`}
        />
      </div>
    </>
  );
}
