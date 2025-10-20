import React, { useEffect, useRef, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { ArrowRight, FileDownIcon, Code2Icon , Sparkles, Cpu, Zap, Globe } from 'lucide-react';
import userProfile from '../assets/images/bgProfile.png';
import heroBackground from '../assets/images/heroImage.jpg'
import styles from '../css/Home.module.css';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import { gsap } from "gsap";

export default function Home() {

	const textRef = useRef(null);
	const words = ["Hi, I'm Muhammad Awais", "You're Developer", "Let's Build Something!"];
	let wordIndex = 0;

	const sections = useMemo(() => ([
		{ id: 'home', title: 'Home', description: 'Hi, I’m Muhammad Awais, a MERN Stack Developer passionate about building scalable web apps.' },
		{ id: 'about', title: 'About', description: 'About Muhammad Awais – MERN Stack Developer at RankSol (PSEB).' },
		{ id: 'skills', title: 'Skills', description: 'Frontend, Backend, and Tools – MERN Stack skillset.' },
		{ id: 'projects', title: 'Projects', description: 'Selected projects with live demos and code.' },
		{ id: 'experience', title: 'Experience', description: 'Internship and academic background of Muhammad Awais.' },
		{ id: 'contact', title: 'Contact', description: 'Contact Muhammad Awais for hiring or collaboration.' },
	]), []);

	const [activeSection, setActiveSection] = useState('home');

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

// const item = {
// 		initial: { opacity: 0, y: 30 },
// 		animate: { opacity: 1, y: 0 }
// 	};
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.25 }
		);

		sections.forEach((s) => {
			const el = document.getElementById(s.id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, [sections]);

	const activeMeta = sections.find((s) => s.id === activeSection) || sections[0];

	return (
		<>
			<main>
				<SEO title={activeMeta.title} description={activeMeta.description} path={`/#${activeMeta.id}`} />
				<img src={heroBackground} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover object-center dark:opacity-20 select-none" />
				<section id="home" className="relative container-responsive py-12 sm:py-16 grid md:grid-cols-[1.6fr_1fr] gap-12  	items-center">
					{/* Full-hero background shapes */}

					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
						<h1 className="text-3xl sm:text-5xl font-bold">
							{/* Hi, I’m Muhammad Awais<br /> */}
							{/* <span className='mr-2'>Hi, </span> */}
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
						<div className="mt-6 flex flex-col sm:flex-row gap-3">
							<a href="#projects" className={`${styles.buttonRounded} w-full sm:w-auto`}>
								<span className="flex items-center gap-2">
									<span>View My Work</span>
									<ArrowRight className='w-4 h-4' aria-hidden="true" />
								</span>
							</a>
							<a href="/resume.pdf" className={`${styles.buttonRoundedSecondary} w-full sm:w-auto`}>
								<span className="flex items-center gap-2 justify-center">
									<FileDownIcon className='w-4 h-4' aria-hidden="true" />
									<span>Download Resume</span>
								</span>
							</a>
						</div>
									<motion.div variants={{
									initial: { opacity: 0, y: 30 },
									animate: { opacity: 1, y: 0 }
									}} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 max-w-md mt-10 mx-auto sm:mx-0">
							{[
								{ icon: Cpu, value: "20+", label: "Projects" },
								{ icon: Zap, value: "1.5+", label: "Years Exp" },
								{ icon: Globe, value: "5+", label: "Clients" }
							].map((stat, index) => (
								<motion.div
									key={stat.label}
									className="text-center p-4 bg-white/40 dark:bg-neutral-800/40 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700"
									whileHover={{ y: -5, scale: 1.05 }}
									transition={{ delay: index * 0.1 }}
								>
									<stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
									<div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
									<div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="self-center md:self-start justify-self-center w-full"
					>
						<motion.div
							className="relative w-full max-w-xs sm:max-w-sm md:max-w-sm min-h-[220px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-[420px] flex items-start justify-center"
						>
							{/* Image (transparent PNG) - no boxed background */}
							<img src={userProfile} alt="Muhammad Awais" className={`w-full max-h-[70vh] object-contain object-top select-none relative z-10 ${styles.image}`} />
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
				{/* Other Sections */}
				<section id="about" >
					<About />
				</section>
				<section id="skills" className="container-responsive py-12 sm:py-16">
					<Skills />
				</section>
				<section id="projects" className="container-responsive py-12 sm:py-16">
					<Projects />
				</section>
				<section id="experience" className="container-responsive py-12 sm:py-16">
					<Experience />
				</section>
				<section id="contact" className="container-responsive py-12 sm:py-16">
					<Contact />
				</section>
		</>
	);
}




