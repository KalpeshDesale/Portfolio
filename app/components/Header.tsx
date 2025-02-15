'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)'],
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      style={{ background: headerBackground }}
      className='fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-md'
    >
      <nav className='container mx-auto px-6 py-4 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='text-xl font-bold flex items-center'>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='font-myfont text-2xl gradient-text-head'
          >
            KD
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex space-x-6'>
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className='relative group text-lg font-medium text-gray-900 hover:text-blue-600 transition-all'
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label='Toggle Menu'
        >
          {isMobileMenuOpen ? (
            <X className='w-7 h-7 text-gray-900' />
          ) : (
            <Menu className='w-7 h-7 text-gray-900' />
          )}
        </button>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            y: isMobileMenuOpen ? 0 : -10,
          }}
          transition={{ duration: 0.3 }}
          className={`absolute top-full left-0 w-full bg-white shadow-lg transform ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className='flex flex-col items-center space-y-6 py-6'>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className='text-lg font-semibold text-gray-900 hover:text-blue-600 transition-all'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  );
}
