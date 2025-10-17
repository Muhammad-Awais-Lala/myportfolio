import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { ArrowRight, FileDownIcon, Code2Icon , Sparkles, Cpu, Zap, Globe } from 'lucide-react';
import userProfile from '../assets/images/bgProfile.png';
import heroBackground from '../assets/images/heroImage.jpg'
import styles from '../css/Home.module.css';
import { useEffect, useRef } from "react";
import About from './About';
import { gsap } from "gsap";

export default function Home() {

	const textRef = useRef(null);
	const words = ["I'm Muhammad Awais", "You're Welcome", "Let's Build Something!"];
	let wordIndex = 0;

	useEffect(() => {
		const el = textRef.current;
		let charIndex = 0;
		let typing;

		const type = () => {
			if (charIndex < words[wordIndex].length) {
				el.textContent += words[wordIndex].charAt(charIndex);
				charIndex++;
				typing = setTimeout(type, 200);
			} else {
				setTimeout(erase, 1500);
			}
		};

		const erase = () => {
			if (charIndex > 0) {
				el.textContent = words[wordIndex].substring(0, charIndex - 1);
				charIndex--;
				typing = setTimeout(erase, 50);
			} else {
				wordIndex = (wordIndex + 1) % words.length;
				setTimeout(type, 500);
			}
		};

		type();
		return () => clearTimeout(typing);
	}, []);


	return (
		<>
			<main>
				<SEO title="Home" description="Hi, I’m Muhammad Awais, a MERN Stack Developer passionate about building scalable web apps." />
				<img src={heroBackground} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover object-center dark:opacity-20 select-none" />
				<section className="relative container-responsive py-12 sm:py-16 grid md:grid-cols-[1.6fr_1fr] gap-12  	items-center">
					{/* Full-hero background shapes */}

					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
						<h1 className="text-3xl sm:text-5xl font-bold">
							{/* Hi, I’m Muhammad Awais<br /> */}
							<span className='mr-2'>Hi, </span>
							<span ref={textRef}></span>
							<span className="animate-blink">|</span>
							<span className="text-primary block mt-2">MERN Stack Developer <motion.span
								className="inline-block ml-2"
								animate={{ scale: [1, 1.18, 1] }}
								transition={{ duration: 1.6, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
							>
								<Code2Icon className='inline' aria-hidden="true" size={64} />
							</motion.span></span>
						</h1>
						<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Passionate about building scalable, user-centric web applications and delivering real-world solutions.</p>
						<div className="mt-6 flex gap-3">
							<a href="#projects" className={styles.buttonRounded}>View My Work <ArrowRight className='inline' /></a>
							<a href="/resume.pdf" className={styles.buttonRoundedSecondary}>Download Resume <FileDownIcon className='inline' /></a>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="self-center md:self-start justify-self-center w-full"
					>
						{/* Minimal corner frame, reduced height to avoid extra top gap */}
						<motion.div
							className="relative w-full max-w-xs sm:max-w-sm md:max-w-sm min-h-[220px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-[420px] flex items-start justify-center"
						>
							{/* Image (transparent PNG) - no boxed background */}
							<img src={userProfile} alt="Muhammad Awais" className={`w-full max-h-[60vh] object-contain object-top select-none relative z-10 ${styles.image}`} />
							{/* Floating code icons */}
							<div className={`${styles.floatingElement} ${styles.element1}`}>
								<Code2Icon className='text-primary' />
							</div>
							<div className={`${styles.floatingElement} ${styles.element2}`}>
								<Sparkles />
							</div>
							<div className={`${styles.floatingElement} ${styles.element3}`}>
								<Cpu/>
							</div>
							<div className={`${styles.floatingElement} ${styles.element4}`}>
								<Zap />
							</div>
							<div className={`${styles.floatingElement} ${styles.element5}`}>
								<Globe />
							</div>
						</motion.div>
					</motion.div>
				</section>
			</main>
			<About />
		</>
	);
}







// import React from 'react';
// import { motion } from 'framer-motion';
// import SEO from '../components/SEO';
// import { ArrowRight, FileDown, Code2, Sparkles, Cpu, Zap, Globe } from 'lucide-react';
// import userProfile from '../assets/images/bgProfile.png';
// import heroBackground from '../assets/images/heroImage.jpg';
// import styles from '../css/Home.module.css';
// import { useEffect, useRef } from "react";
// import About from './About';

// export default function Home() {
// 	const textRef = useRef(null);
// 	const words = ["Full-Stack Developer", "Problem Solver", "Tech Enthusiast", "Creative Coder"];
// 	let wordIndex = 0;

// 	useEffect(() => {
// 		const el = textRef.current;
// 		let charIndex = 0;
// 		let typing;

// 		const type = () => {
// 			if (charIndex < words[wordIndex].length) {
// 				el.textContent += words[wordIndex].charAt(charIndex);
// 				charIndex++;
// 				typing = setTimeout(type, 100);
// 			} else {
// 				setTimeout(erase, 2000);
// 			}
// 		};

// 		const erase = () => {
// 			if (charIndex > 0) {
// 				el.textContent = words[wordIndex].substring(0, charIndex - 1);
// 				charIndex--;
// 				typing = setTimeout(erase, 50);
// 			} else {
// 				wordIndex = (wordIndex + 1) % words.length;
// 				setTimeout(type, 300);
// 			}
// 		};

// 		type();
// 		return () => clearTimeout(typing);
// 	}, []);

// 	// Floating animation variants
// 	const floatingVariants = {
// 		animate: {
// 			y: [0, -20, 0],
// 			transition: {
// 				duration: 4,
// 				repeat: Infinity,
// 				ease: "easeInOut"
// 			}
// 		}
// 	};

// 	const staggerChildren = {
// 		animate: {
// 			transition: {
// 				staggerChildren: 0.1
// 			}
// 		}
// 	};

// 	const item = {
// 		initial: { opacity: 0, y: 30 },
// 		animate: { opacity: 1, y: 0 }
// 	};

// 	return (
// 		<>
// 			<main className="overflow-hidden">
// 				<SEO 
// 					title="Home | Muhammad Awais - MERN Stack Developer" 
// 					description="Hi, I'm Muhammad Awais, a passionate MERN Stack Developer crafting scalable web applications and digital experiences." 
// 				/>
				
// 				{/* Enhanced Background with Gradient Overlay */}
// 				<div className="absolute inset-0 w-full h-full overflow-hidden">
// 					<img 
// 						src={heroBackground} 
// 						alt="Hero Background" 
// 						className="w-full h-full object-cover object-center dark:opacity-15 select-none scale-110" 
// 					/>
// 					<div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-primary/5 dark:from-neutral-900/90 dark:via-neutral-900/80 dark:to-primary/10"></div>
					
// 					{/* Animated Background Shapes */}
// 					<div className="absolute inset-0 overflow-hidden">
// 						<motion.div
// 							className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
// 							animate={{
// 								scale: [1, 1.2, 1],
// 								opacity: [0.3, 0.5, 0.3],
// 							}}
// 							transition={{
// 								duration: 8,
// 								repeat: Infinity,
// 								ease: "easeInOut"
// 							}}
// 						/>
// 						<motion.div
// 							className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
// 							animate={{
// 								scale: [1.2, 1, 1.2],
// 								opacity: [0.2, 0.4, 0.2],
// 							}}
// 							transition={{
// 								duration: 10,
// 								repeat: Infinity,
// 								ease: "easeInOut"
// 							}}
// 						/>
// 					</div>
// 				</div>

// 				<section className="relative container-responsive py-16 sm:py-24 grid md:grid-cols-[1.4fr_1fr] gap-16 items-center min-h-screen">
// 					{/* Left Content */}
// 					<motion.div 
// 						className="space-y-8"
// 						variants={staggerChildren}
// 						initial="initial"
// 						animate="animate"
// 					>
// 						<motion.div variants={item} className="space-y-4">
// 							{/* Welcome Badge */}
// 							<motion.div
// 								className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
// 								whileHover={{ scale: 1.05 }}
// 								transition={{ type: "spring", stiffness: 400, damping: 10 }}
// 							>
// 								<Sparkles size={16} />
// 								Welcome to my portfolio
// 							</motion.div>

// 							{/* Main Heading */}
// 							<h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
// 								<span className="block text-gray-900 dark:text-white">
// 									Hi, I'm{" "}
// 									<span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
// 										Muhammad Awais
// 									</span>
// 								</span>
// 								<span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 min-h-[1.5em]">
// 									<span ref={textRef}></span>
// 									<span className="animate-blink">|</span>
// 								</span>
// 							</h1>

// 							{/* Description */}
// 							<motion.p 
// 								variants={item}
// 								className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
// 							>
// 								Passionate about crafting <span className="text-primary font-semibold">scalable web applications</span> 
// 								{" "}and delivering <span className="text-primary font-semibold">real-world solutions</span> that make a difference.
// 							</motion.p>
// 						</motion.div>

// 						{/* Tech Stack Pill */}
// 						<motion.div variants={item} className="flex flex-wrap gap-3 items-center">
// 							<span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Tech I work with:</span>
// 							{["React", "Node.js", "MongoDB", "Express", "TypeScript"].map((tech, index) => (
// 								<motion.span
// 									key={tech}
// 									className="px-3 py-1 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm rounded-full text-xs font-medium border border-gray-200 dark:border-neutral-700"
// 									initial={{ opacity: 0, scale: 0 }}
// 									animate={{ opacity: 1, scale: 1 }}
// 									transition={{ delay: 0.5 + index * 0.1 }}
// 									whileHover={{ scale: 1.1, y: -2 }}
// 								>
// 									{tech}
// 								</motion.span>
// 							))}
// 						</motion.div>

// 						{/* CTA Buttons */}
// 						<motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-4">
// 							<motion.a
// 								href="#projects"
// 								className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-2xl font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 overflow-hidden"
// 								whileHover={{ scale: 1.05, y: -2 }}
// 								whileTap={{ scale: 0.98 }}
// 							>
// 								<span className="relative z-10">View My Work</span>
// 								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
// 								<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// 							</motion.a>

// 							<motion.a
// 								href="/resume.pdf"
// 								className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/70 dark:bg-neutral-800/70 backdrop-blur-sm border border-gray-300 dark:border-neutral-600 text-gray-900 dark:text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white dark:hover:bg-neutral-700"
// 								whileHover={{ scale: 1.05, y: -2 }}
// 								whileTap={{ scale: 0.98 }}
// 							>
// 								<FileDown className="w-5 h-5" />
// 								Download Resume
// 							</motion.a>
// 						</motion.div>

// 						{/* Stats */}
// 						<motion.div variants={item} className="grid grid-cols-3 gap-6 pt-8 max-w-md">
// 							{[
// 								{ icon: Cpu, value: "50+", label: "Projects" },
// 								{ icon: Zap, value: "3+", label: "Years Exp" },
// 								{ icon: Globe, value: "25+", label: "Clients" }
// 							].map((stat, index) => (
// 								<motion.div
// 									key={stat.label}
// 									className="text-center p-4 bg-white/40 dark:bg-neutral-800/40 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700"
// 									whileHover={{ y: -5, scale: 1.05 }}
// 									transition={{ delay: index * 0.1 }}
// 								>
// 									<stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
// 									<div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
// 									<div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
// 								</motion.div>
// 							))}
// 						</motion.div>
// 					</motion.div>

// 					{/* Right Content - Profile Image */}
// 					<motion.div
// 						className="relative flex justify-center items-center"
// 						initial={{ opacity: 0, x: 50 }}
// 						animate={{ opacity: 1, x: 0 }}
// 						transition={{ duration: 0.8, delay: 0.3 }}
// 					>
// 						{/* Main Image Container */}
// 						<motion.div
// 							className="relative w-full max-w-md"
// 							variants={floatingVariants}
// 							animate="animate"
// 						>
// 							{/* Glow Effect */}
// 							<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-3xl scale-110"></div>
							
// 							{/* Profile Image */}
// 							<motion.div
// 								className="relative z-10 bg-gradient-to-br from-white to-gray-100 dark:from-neutral-800 dark:to-neutral-700 p-8 rounded-3xl shadow-2xl border border-white/50 dark:border-neutral-600/50"
// 								whileHover={{ scale: 1.02 }}
// 								transition={{ type: "spring", stiffness: 300 }}
// 							>
// 								<img 
// 									src={userProfile} 
// 									alt="Muhammad Awais" 
// 									className="w-full h-auto rounded-2xl object-cover shadow-lg"
// 								/>
// 							</motion.div>

// 							{/* Floating Tech Elements */}
// 							{[
// 								{ class: styles.element1, icon: Code2, delay: 0 },
// 								{ class: styles.element2, icon: Cpu, delay: 1 },
// 								{ class: styles.element3, icon: Zap, delay: 2 },
// 								{ class: styles.element4, icon: Globe, delay: 3 },
// 								{ class: styles.element5, icon: Sparkles, delay: 4 }
// 							].map((element, index) => (
// 								<motion.div
// 									key={index}
// 									className={`absolute ${element.class} bg-white dark:bg-neutral-800 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 rounded-2xl p-3 shadow-lg`}
// 									animate={{
// 										y: [0, -20, 0],
// 										rotate: [0, 5, 0],
// 									}}
// 									transition={{
// 										duration: 4,
// 										delay: element.delay,
// 										repeat: Infinity,
// 										ease: "easeInOut"
// 									}}
// 									whileHover={{ scale: 1.2, rotate: 10 }}
// 								>
// 									<element.icon className="w-6 h-6 text-primary" />
// 								</motion.div>
// 							))}
// 						</motion.div>
// 					</motion.div>
// 				</section>
// 			</main>
// 			<About />
// 		</>
// 	);
// }