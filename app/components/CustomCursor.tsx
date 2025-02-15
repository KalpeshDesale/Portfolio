'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const onMouseDown = () => {
      gsap.to(cursor, { scale: 0.8, duration: 0.2 });
      gsap.to(follower, { scale: 1.2, duration: 0.2 });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
      gsap.to(follower, { scale: 1, duration: 0.2 });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className='fixed w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50 hidden md:block'
        style={{ left: 0, top: 0 }}
      ></div>
      <div
        ref={followerRef}
        className='fixed w-8 h-8 bg-blue-300 rounded-full pointer-events-none z-40 opacity-50 hidden md:block'
        style={{ left: 0, top: 0 }}
      ></div>
    </>
  );
}
