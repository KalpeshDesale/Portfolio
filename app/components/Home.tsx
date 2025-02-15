'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { Download, Linkedin } from 'lucide-react';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return;

    const gradients = [
      'linear-gradient(to bottom, rgb(59, 130, 246), rgb(219, 234, 254))',
    ];
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    gradients.forEach((gradient, index) => {
      tl.to(background, {
        duration: 5,
        background: gradient,
        ease: 'power1.inOut',
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden'
    >
      <div ref={backgroundRef} className='absolute inset-0 z-0' />
      <motion.div
        className='container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center'
        style={{ y, opacity }}
      >
        <div className='flex items-end'>
          <motion.h1
            className='  text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text-head text-center sm:text-left font-myfont tracking-wide'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm Kalpesh Desale
          </motion.h1>
          <motion.h1
            className='sm:text-5xl text-6xl font-bold  h-[102px] flex items-center gap-2'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              animate={{ rotate: [0, 20, 0] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              className='inline-block '
            >
              👋
            </motion.span>
          </motion.h1>
        </div>
        <motion.p
          className='lg:text-xl lg:w-[910px] sm:text-2xl mb-8 gradient-text text-center sm:text-left'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          a passionate Software Engineer specializing in React.js, Redux,
          TypeScript, and scalable web solutions. I build high-performance
          applications with clean, reusable code.
        </motion.p>
        <motion.div
          className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center sm:justify-start'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href='/Kalpesh_Desale_Resume.pdf'
            download
            className='bg-white text-blue-600 px-4 sm:px-6 py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-blue-100 transition-colors duration-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            <span>Download Resume</span>
          </motion.a>
          <motion.a
            href='https://linkedin.com/in/kalpesh-desale'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors duration-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} />
            <span>Connect on LinkedIn</span>
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        className='flex justify-center w-full absolute bottom-36 transform -translate-x-1/2'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
          }}
        >
          <HiOutlineChevronDoubleDown
            size={32}
            className='text-blue-600 mr-2'
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
