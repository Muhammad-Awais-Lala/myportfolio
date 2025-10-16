import React from 'react';
import SEO from '../components/SEO';
import styles from '../css/Home.module.css';
export default function About() {
	return (
		<main className={`${styles.container} `}>
			<div className='container-responsive py-12 sm:py-16'>
				<SEO title="About" description="About Muhammad Awais – MERN Stack Developer, currently working at RankSol (PSEB sponsored)." />
				<h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>
				<p className="mt-4 text-gray-700 dark:text-gray-300">I’m Muhammad Awais, a MERN Stack Developer focused on building scalable and maintainable web applications. I’m currently working as a MERN Stack Developer at RankSol, sponsored by PSEB (Pakistan Software Export Board). I love solving real-world industry problems and continuously improving my craft through hands-on projects and learning.</p>

			</div>
		</main>
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
