import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import userProfile from '../assets/images/bgProfile.png';
import heroBackground from '../assets/images/heroImage.jpg'
import styles from '../css/Home.module.css';

export default function Home() {
	return (
		<main>
			<SEO title="Home" description="Hi, I’m Muhammad Awais, a MERN Stack Developer passionate about building scalable web apps." />
			<img src={heroBackground} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover object-center dark:opacity-20 select-none" />
			<section className="relative container-responsive py-12 sm:py-16 grid md:grid-cols-[1.6fr_1fr] gap-12  	items-center">
				{/* Full-hero background shapes */}

				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
					<h1 className="text-3xl sm:text-5xl font-bold">Hi, I’m Muhammad Awais<br />
						<span className="text-primary block mt-2">MERN Stack Developer</span>
					</h1>
					<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Passionate about building scalable, user-centric web applications and delivering real-world solutions.</p>
					<div className="mt-6 flex gap-3">
						<a href="#projects" className={styles.buttonRounded}>View My Work</a>
						<a href="/resume.pdf" className={styles.buttonRoundedSecondary}>Download Resume</a>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="self-start justify-self-center w-full"
				>
					{/* Minimal corner frame, reduced height to avoid extra top gap */}
					<motion.div
						className="relative w-full max-w-xs sm:max-w-sm md:max-w-sm min-h-[220px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-[420px] flex items-start justify-center"
					>
						{/* Image (transparent PNG) - no boxed background */}
						<img src={userProfile} alt="Muhammad Awais" className={`w-full max-h-[60vh] object-contain object-top select-none relative z-10 ${styles.image}`} />
					</motion.div>

				</motion.div>
			</section>
		</main>
	);
}
