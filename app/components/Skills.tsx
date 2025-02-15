'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { RiNextjsFill } from 'react-icons/ri';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaAws,
  FaJava,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiStyledcomponents,
  SiJest,
  SiCypress,
  SiExpress,
  SiMysql,
  SiStorybook,
} from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', proficiency: 90 },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', proficiency: 80 },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', proficiency: 85 },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: 'text-blue-600',
    proficiency: 80,
  },
  { name: 'React', icon: FaReact, color: 'text-blue-400', proficiency: 90 },
  { name: 'Redux', icon: SiRedux, color: 'text-purple-500', proficiency: 85 },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: 'text-teal-400',
    proficiency: 80,
  },
  {
    name: 'Styled Components',
    icon: SiStyledcomponents,
    color: 'text-pink-500',
    proficiency: 80,
  },
  {
    name: 'StoryBook',
    icon: SiStorybook,
    color: 'text-pink-500',
    proficiency: 80,
  },
  { name: 'Jest', icon: SiJest, color: 'text-red-600', proficiency: 70 },
  {
    name: 'Cypress',
    icon: SiCypress,
    color: 'text-green-600',
    proficiency: 70,
  },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', proficiency: 65 },
  {
    name: 'Express.js',
    icon: SiExpress,
    color: 'text-gray-500',
    proficiency: 65,
  },
  { name: 'GitHub', icon: FaGithub, color: 'text-orange-400', proficiency: 80 },
  { name: 'AWS', icon: FaAws, color: 'text-orange-400', proficiency: 60 },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-800', proficiency: 70 },
  {
    name: 'Next Js',
    icon: RiNextjsFill,
    color: 'text-red-600',
    proficiency: 50,
  },
  {
    name: 'Java',
    icon: FaJava,
    color: 'text-red-600',
    proficiency: 60,
  },
];

const CircularProgress = ({ percentage }: { percentage: number }) => {
  const circumference = 2 * Math.PI * 38; // 38 is the radius of the circle
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg className='w-24 h-24' viewBox='0 0 100 100'>
      <circle
        className='text-gray-200'
        strokeWidth='8'
        stroke='currentColor'
        fill='transparent'
        r='38'
        cx='50'
        cy='50'
      />
      <motion.circle
        className='text-blue-600'
        strokeWidth='8'
        strokeLinecap='round'
        stroke='currentColor'
        fill='transparent'
        r='38'
        cx='50'
        cy='50'
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        style={{
          strokeDasharray: circumference,
        }}
      />
      <text
        x='50'
        y='50'
        fontFamily='Verdana'
        fontSize='18'
        textAnchor='middle'
        alignmentBaseline='central'
        fill='currentColor'
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
};

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section id='skills' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-6' ref={containerRef}>
        <motion.h2
          className='text-4xl font-bold mb-12 text-center gradient-text-head'
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <div className='grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6 gap-12 lg:px-40'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className='flex flex-col items-center'
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <motion.div
                className='w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 relative'
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {hoveredSkill === index ? (
                  <CircularProgress percentage={skill.proficiency} />
                ) : (
                  <skill.icon size={40} className='text-blue-500' />
                )}
              </motion.div>
              <h3 className='text-lg font-semibold text-center'>
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
