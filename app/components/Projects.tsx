'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
// import { GitlabIcon as GitHub } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import { FaRegCheckCircle } from 'react-icons/fa';

const projects = [
  {
    title: 'DemandHelm Advertising Analytics Platform',
    description: [
      'Developed a comprehensive advertising analytics dashboard processing real-time data for 1000+ Amazon and Walmart campaigns,enabling merchants to track and optimize their advertising spend.',
      'Implemented efficient state management using Redux Toolkit and RTK Query.',
      'Built interactive visualizations and bulk action components for managing campaign metrics and updates across marketplaces,improving efficiency and decision-making by 40%.',
      'Designed and implemented scalable backend infrastructure, developing high-performance RESTful APIs to process campaign metrics, ensuring real-time data synchronization across multiple marketplaces.',
    ],
    techStack: [
      'React.js',
      'TypeScript',
      'Redux Toolkit',
      'Recharts',
      'Node.Js',
      'Express',
      'MySQL',
      'AWS',
    ],
    img: 'adAnalytics_dash.mp4',
    githubLink: null,
  },
  {
    title: 'DemandHelm Analytics Extension',
    description: [
      'Developed a Chrome extension that processes and visualizes real-time e-commerce analytics data.',
      'Implemented secure OAuth authentication flow and real-time data synchronization with backend services.',
      'Reduced data analysis time by 60% through automated data processing and visualization features',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Chrome Extensions API',
      'Node.js',
      'Express',
      'Postgresql',
      'AWS',
    ],
    img: 'table-vdo.mp4',
    githubLink: null,
  },
  {
    title: 'Happy Pet E-commerce Platform',
    description: [
      'Architected and developed a full-stack pet buying and selling e-commerce platform.',
      'Implemented advanced search algorithms and filters, improving product discovery time by 40%.',
      'Designed and optimized database schema resulting in 50% faster query response times.',
    ],
    techStack: ['React.js', 'Java', 'Spring Boot', 'MySQL'],
    img: 'happy-pet.png',
    githubLink: 'https://github.com/KalpeshDesale/HappyPet-GroupNo_17',
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section id='projects' className='py-20'>
      <div className='container mx-auto px-6' ref={containerRef}>
        <motion.h2
          className='text-4xl font-bold mb-12 text-center gradient-text-head'
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <div className='p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {projects.map((project, index) => {
            const arr = project.img.split('.');
            const type = arr?.at(1);

            return (
              <motion.div
                key={index}
                className='bg-white rounded-lg shadow-xl overflow-hidden '
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                style={{ borderRadius: '8px' }}
              >
                <h3 className='px-6 mt-4 text-lg font-semibold'>
                  {project.title}
                </h3>
                <div className='px-6'>
                  {/* Image Wrapper */}
                  {project.img ? (
                    <div className='p-3 s-40 overflow-hidden flex justify-center'>
                      {type === 'mp4' ? (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className='w-full h-auto'
                        >
                          <source src={`/${project.img}`} type='video/mp4' />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img
                          src={`/${project.img}`}
                          alt={project.title}
                          className='w-80 h-52 lg:my-9 sm:my-4'
                        />
                      )}
                    </div>
                  ) : (
                    <div className='w-full h-40 flex items-center justify-center bg-gray-200'>
                      <span className='text-gray-500'>No Image</span>
                    </div>
                  )}

                  {project.description.map((desc, idx) => (
                    <div className='flex' key={idx}>
                      <FaRegCheckCircle
                        size={16}
                        className=' text-blue-500 mr-2 mt-0.5 flex-shrink-0'
                      />
                      <p className='text-sm text-gray-600 mb-4'>{desc}</p>
                    </div>
                  ))}
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.techStack.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className='bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  {project.githubLink ? (
                    <motion.a
                      href={project.githubLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='mb-4 inline-flex text-sm items-center space-x-2 text-blue-600 hover:text-blue-800 '
                      whileHover={{ x: 5 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <FaGithub size={20} />
                      <span>View on GitHub</span>
                    </motion.a>
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 'use client';

// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { GitlabIcon as GitHub } from 'lucide-react';

// const projects = [
//   {
//     title: 'DemandHelm Advertising Analytics Platform',
//     description:
//       'Comprehensive advertising analytics dashboard for Amazon and Walmart campaigns.',
//     techStack: [
//       'React.js',
//       'TypeScript',
//       'Redux Toolkit',
//       'Recharts',
//       'Java',
//       'Spring Boot',
//     ],
//     img: 'adAnalytics_dashboard2.jpg',
//     githubLink: '#',
//   },
//   {
//     title: 'DemandHelm Analytics Extension',
//     description:
//       'Chrome extension for processing and visualizing real-time e-commerce analytics data.',
//     techStack: ['React', 'TypeScript', 'Chrome Extensions API', 'Node.js'],
//     img: '',
//     githubLink: '#',
//   },
//   {
//     title: 'Happy Pet E-commerce Platform',
//     description:
//       'Full-stack pet buying and selling e-commerce platform with advanced search algorithms.',
//     techStack: ['React.js', 'Spring Boot', 'AWS'],
//     img: 'happy-pet.png',
//     githubLink: '#',
//   },
//   // Add more projects here
// ];

// export default function Projects() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(containerRef, { once: true, amount: 0.2 });

//   return (
//     <section id='projects' className='py-20'>
//       <div className='container mx-auto px-6' ref={containerRef}>
//         <motion.h2
//           className='text-4xl font-bold mb-12 text-center'
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           Projects
//         </motion.h2>
//         <div className='flex justify-around'>
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               className='bg-white rounded-lg shadow-lg overflow-hidden w-[400px]'
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//             >
//               <div className='p-6'>
//                 <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
//                 <div>
//                   <img src={'/jpg/' + project.img} alt='' />
//                 </div>
//                 <p className='text-gray-600 mb-4'>{project.description}</p>
//                 <div className='flex flex-wrap gap-2 mb-4'>
//                   {project.techStack.map((tech, idx) => (
//                     <motion.span
//                       key={idx}
//                       className='bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm'
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.3, delay: idx * 0.1 }}
//                     >
//                       {tech}
//                     </motion.span>
//                   ))}
//                 </div>
//                 <motion.a
//                   href={project.githubLink}
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800'
//                   whileHover={{ x: 5 }}
//                   transition={{ type: 'spring', stiffness: 400, damping: 10 }}
//                 >
//                   <GitHub size={20} />
//                   <span>View on GitHub</span>
//                 </motion.a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
