import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import userProfile from '../assets/images/bgProfile.png';

export default function Home() {
	return (
		<main>
			<SEO title="Home" description="Hi, I’m Muhammad Awais, a MERN Stack Developer passionate about building scalable web apps." />
			<section className="container-responsive py-12 sm:py-16 grid md:grid-cols-2 gap-8 items-center">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
					<h1 className="text-3xl sm:text-5xl font-bold leading-tight">Hi, I’m Muhammad Awais<br />
						<span className="text-primary">MERN Stack Developer</span>
					</h1>
					<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Passionate about building scalable, user-centric web applications and delivering real-world solutions.</p>
					<div className="mt-6 flex gap-3">
						<a href="#projects" className="px-5 py-3 rounded-md bg-primary text-white">View My Work</a>
						<a href="/resume.pdf" className="px-5 py-3 rounded-md border border-black/10 dark:border-white/20">Download Resume</a>
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
						className="relative w-full max-w-sm sm:max-w-md md:max-w-lg min-h-[220px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-[420px] flex items-start justify-center"
						animate={{ y: [0, -4, 0] }}
						style={{ rotate: '6deg', scale: 1.03 }}
						transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
					>
						{/* Decorative hero background shapes (behind transparent image) */}
						<div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
							{/* Soft blurred gradient circle */}
							<span className="absolute -left-20 -top-16 w-72 h-72 bg-gradient-to-br from-primary/40 to-accent/30 rounded-full filter blur-3xl opacity-80 transform rotate-12" aria-hidden="true" />
							{/* Accent blurred shape */}
							<span className="absolute right-4 top-24 w-56 h-56 bg-gradient-to-tr from-accent/30 to-primary/20 rounded-full filter blur-2xl opacity-70" aria-hidden="true" />
							{/* Subtle diagonal stripe using SVG */}
							<svg className="absolute left-8 bottom-8 w-64 h-64 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<defs>
									<linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
										<stop offset="0%" stopColor="rgba(99,102,241,0.6)" />
										<stop offset="100%" stopColor="rgba(236,72,153,0.4)" />
									</linearGradient>
								</defs>
								<rect x="0" y="0" width="200" height="200" fill="url(#g1)" transform="rotate(-20 100 100)" />
							</svg>
						</div>

						{/* Image (transparent PNG) - no boxed background */}
						<img src={userProfile} alt="Muhammad Awais" className="w-full max-h-[60vh] object-contain object-top select-none" />
					</motion.div>
				</motion.div>
			</section>
		</main>
	);
}
