import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { ArrowRight, FileDownIcon, Code2Icon } from 'lucide-react';
import userProfile from '../assets/images/bgProfile.png';
import heroBackground from '../assets/images/heroImage.jpg'
import styles from '../css/Home.module.css';
import { useEffect, useRef } from "react";
import About from './About';
// import { gsap } from "gsap";

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
								<Code2Icon />
							</div>
							<div className={`${styles.floatingElement} ${styles.element3}`}>
								<Code2Icon />
							</div>
							<div className={`${styles.floatingElement} ${styles.element4}`}>
								<Code2Icon />
							</div>
							<div className={`${styles.floatingElement} ${styles.element5}`}>
								<Code2Icon />
							</div>
						</motion.div>
					</motion.div>
				</section>
			</main>
			<About />
		</>
	);
}
