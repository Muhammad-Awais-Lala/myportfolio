import React from 'react';
import styles from '../css/Home.module.css';
import img from '../assets/images/971.jpg';
export default function About() {
	return (
		<>
			{/* <main className={`${styles.gridBackground} `}>
				<div className='container-responsive py-12 sm:py-16'>
					<div className={`${styles.customShapeDivider}`}>
						<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
							<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={`${styles.shapeFill}`}></path>
							<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={`${styles.shapeFill}`}></path>
							<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={`${styles.shapeFill}`}></path>
						</svg>
					</div>
					<h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>
					<p className="mt-4 text-gray-700 dark:text-gray-300">I’m Muhammad Awais, a MERN Stack Developer focused on building scalable and maintainable web applications. I’m currently working as a MERN Stack Developer at RankSol, sponsored by PSEB (Pakistan Software Export Board). I love solving real-world industry problems and continuously improving my craft through hands-on projects and learning.</p>

				</div>
			</main> */}
			<main className="relative bg-white dark:bg-gray-900 py-16">
				<div className="container-responsive">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
						<p className="mt-4 text-gray-600 dark:text-gray-300">I’m Muhammad Awais, a MERN Stack Developer focused on building scalable and maintainable web applications. I’m currently working as a MERN Stack Developer at RankSol, sponsored by PSEB (Pakistan Software Export Board). I love solving real-world industry problems and continuously improving my craft through hands-on projects and learning.</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						<div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">My Journey</h3>
							<p className="text-gray-700 dark:text-gray-300 mb-4">My journey into web development began with a passion for creating intuitive and dynamic user experiences. Over the years, I have honed my skills in both front-end and back-end technologies, allowing me to build comprehensive web solutions.</p>
							<p className="text-gray-700 dark:text-gray-300 mb-4">I thrive in collaborative environments where I can contribute to innovative projects and learn from others. My goal is to leverage technology to solve complex problems and deliver value to users.</p>
							<p className="text-gray-700 dark:text-gray-300">When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying updated with industry trends.</p>
						</div>
						<div>
							<img src={img} alt="About Me" className="w-full h-auto rounded-lg shadow-soft" />
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function AnimatedText() {
//   const words = ["Developer", "Designer", "Creator"];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % words.length);
//     }, 2000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="text-4xl font-semibold text-center text-indigo-600 mt-10">
//       <AnimatePresence mode="wait">
//         <motion.span
//           key={words[index]}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.5 }}
//         >
//           {words[index]}
//         </motion.span>
//       </AnimatePresence>
//     </div>
//   );
// }
