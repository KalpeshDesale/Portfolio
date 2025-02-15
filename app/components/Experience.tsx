'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, CheckCircle } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'DemandHelm',
    duration: 'November 2021 – Present',
    responsibilities: [
      'Accelerated development efficiency by 25% by transforming Figma designs into reusable components using React Hooks, TypeScript, and Styled Components. Developed interactive and responsive dashboards and user interfaces while managing API calls efficiently with Redux Toolkit Query (RTK Query).',
      'Optimized performance through Code Splitting, Lazy Loading with React Suspense, reducing initial load time.',
      'Developed a private NPM library using GitHub packages for our shared components & utilities, ensuring code consistency and reuse across multiple repositories. Added Storybook and Vitest for test driven development.',
      'Built a customizable Table component using TanStack Table which can be resized, searchable, sorted & paginated. Also added Virtualization to enhance performance by rendering only visible rows and avoiding over-allocation of DOM nodes.',
      'Designed and optimized Redux-based state management, ensuring consistent data flow and improved application performance.',
      'Crafted stunning data visualizations by employing various chart types using libraries such as Chart.js & ReCharts.',
      'Contributed to upgrading from React Router v5 to React Router v6, Moment to Date-fns. Implemented dynamic, client-side routing with React Router to ensure smooth navigation across multiple pages.',
      'Configured and integrated Vitest for unit testing with comprehensive test suites and Mock Service Worker (MSW) for API mocking. Enforced coding standards using ESLint and Prettier. Integrated Cypress for end-to-end testing, including multi-factor authentication (MFA) and other key workflows.',
      'Architected and implemented scalable data integration solutions using AWS Lambda and S3, successfully automating data retrieval from Rainforest APIs and optimizing storage costs',
      'Built RESTful APIs to facilitate seamless integration between frontend applications and backend services',
    ],
  },
  // Add more experiences here
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section id='experience' className='py-20 bg-gray-100'>
      <div className='container mx-auto px-6' ref={containerRef}>
        <motion.h2
          className='text-4xl font-bold mb-12 text-center gradient-text-head '
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <div className='flex justify-center w-full'>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden w-[800px]'
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500' />
              <h3 className='text-xl font-semibold mb-2'>{exp.title}</h3>
              <p className='text-gray-600 mb-4'>
                {exp.company} | {exp.duration}
              </p>
              <ul className='space-y-2'>
                {exp.responsibilities.map((resp, idx) => (
                  <motion.li
                    key={idx}
                    className='flex items-start space-x-2 text-sm'
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + idx * 0.1,
                    }}
                  >
                    <CheckCircle
                      size={16}
                      className=' text-blue-500 mt-1 flex-shrink-0'
                    />

                    <span>{resp}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
