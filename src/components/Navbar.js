// import React, { useContext, useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { ThemeContext } from '../context/ThemeContext';
// import { Sun, Moon } from 'lucide-react';

// export default function Navbar() {
// 	const { isDark, toggle } = useContext(ThemeContext);
// 	const [open, setOpen] = useState(false);

// 	const navItemClass = ({ isActive }) =>
// 		`px-3 py-2 rounded-md text-sm font-medium hover:underline dark:hover:bg-white/10 ${
// 			isActive ? 'text-primary underline bg-primary/5 dark:text-white' : 'text-gray-700 dark:text-gray-200'
// 		}`;

// 	return (
// 		<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
// 			<div className="container-responsive flex items-center justify-between h-16">
// 				<Link to="/" className="font-semibold text-lg">Muhammad Awais</Link>
// 				<nav className="hidden md:flex items-center gap-1">
// 					<NavLink to="/" className={navItemClass} end>Home</NavLink>
// 					<NavLink to="/about" className={navItemClass}>About</NavLink>
// 					<NavLink to="/skills" className={navItemClass}>Skills</NavLink>
// 					<NavLink to="/projects" className={navItemClass}>Projects</NavLink>
// 					<NavLink to="/experience" className={navItemClass}>Experience</NavLink>
// 					<NavLink to="/contact" className={navItemClass}>Contact</NavLink>
// 					<NavLink to="/playground" className={navItemClass}>Playground</NavLink>
// 					<NavLink to="/blog" className={navItemClass}>Blog</NavLink>
// 					<button aria-label="Toggle Theme" onClick={toggle} className="ml-2 p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10">
// 						{isDark ? <Sun size={18} /> : <Moon size={18} />}
// 					</button>
// 				</nav>
// 				<button className="md:hidden p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav">
// 					<span className="sr-only">Toggle Menu</span>
// 					<div className="w-6 h-0.5 bg-current mb-1" />
// 					<div className="w-6 h-0.5 bg-current mb-1" />
// 					<div className="w-6 h-0.5 bg-current" />
// 				</button>
// 			</div>
// 			{open && (
// 				<div id="mobile-nav" className="md:hidden border-t border-black/5 dark:border-white/10">
// 					<div className="container-responsive py-2 flex flex-col">
// 						<NavLink onClick={() => setOpen(false)} to="/" className={navItemClass} end>Home</NavLink>
// 						<NavLink onClick={() => setOpen(false)} to="/about" className={navItemClass}>About</NavLink>
// 						<NavLink onClick={() => setOpen(false)} to="/skills" className={navItemClass}>Skills</NavLink>
// 						<NavLink onClick={() => setOpen(false)} to="/projects" className={navItemClass}>Projects</NavLink>
// 						<NavLink onClick={() => setOpen(false)} to="/experience" className={navItemClass}>Experience</NavLink>
// 						<NavLink onClick={() => setOpen(false)} to="/contact" className={navItemClass}>Contact</NavLink>
// 						<NavLink onClick={() => setOpen(false)} to="/playground" className={navItemClass}>Playground</NavLink>
// 						<NavLink onClick={() => setOpen(false)} to="/blog" className={navItemClass}>Blog</NavLink>
// 						<button aria-label="Toggle Theme" onClick={() => { toggle(); setOpen(false); }} className="mt-2 px-3 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 text-left">{isDark ? 'Light Mode' : 'Dark Mode'}</button>
// 					</div>
// 				</div>
// 			)}
// 		</header>
// 	);
// }

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
	const { isDark, toggle } = useContext(ThemeContext);
	const [open, setOpen] = useState(false);

	const navItemClass = 'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out text-gray-700 dark:text-gray-200 bg-white/40 dark:bg-neutral-800/40 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-neutral-700/60 hover:shadow-md hover:scale-105';

	const handleNavClick = (sectionId) => (e) => {
		e.preventDefault();
		const el = document.getElementById(sectionId);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			window.history.pushState(null, '', `/#${sectionId}`);
		}
		setOpen(false);
	};

	return (
		<header className="sticky top-0 z-40 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-black/10 dark:border-white/15">
			<div className="container-responsive flex items-center justify-between h-16">
				<Link to="/" className="font-semibold text-lg bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-black/10 dark:border-white/15 hover:bg-white/70 dark:hover:bg-neutral-700/50 transition-all duration-300">
					Muhammad Awais
				</Link>
				
				<nav className="hidden md:flex items-center gap-2 bg-white/30 dark:bg-neutral-800/30 backdrop-blur-md px-3 py-1 rounded-full border border-black/10 dark:border-white/15 w-[80%] max-w-4xl mx-auto">
					<div className="flex items-center justify-between w-full gap-1">
						<div className="flex items-center gap-1 flex-1 justify-center">
							<a href="/#home" onClick={handleNavClick('home')} className={navItemClass}>Home</a>
							<a href="/#about" onClick={handleNavClick('about')} className={navItemClass}>About</a>
							<a href="/#skills" onClick={handleNavClick('skills')} className={navItemClass}>Skills</a>
							<a href="/#projects" onClick={handleNavClick('projects')} className={navItemClass}>Projects</a>
							<a href="/#experience" onClick={handleNavClick('experience')} className={navItemClass}>Experience</a>
							<a href="/#contact" onClick={handleNavClick('contact')} className={navItemClass}>Contact</a>
							<Link to="/playground" className={navItemClass}>Playground</Link>
							<Link to="/blog" className={navItemClass}>Blog</Link>
						</div>
						<button 
							aria-label="Toggle Theme" 
							onClick={toggle} 
							className="p-2 rounded-full bg-white/40 dark:bg-neutral-800/40 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-neutral-700/60 hover:shadow-md hover:scale-105 transition-all duration-300 border border-black/10 dark:border-white/15"
						>
							{isDark ? <Sun size={18} /> : <Moon size={18} />}
						</button>
					</div>
				</nav>
				
				<button 
					className="md:hidden p-2 rounded-full bg-white/40 dark:bg-neutral-800/40 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-neutral-700/60 hover:shadow-md transition-all duration-300 border border-black/10 dark:border-white/15" 
					onClick={() => setOpen(!open)} 
					aria-expanded={open} 
					aria-controls="mobile-nav"
				>
					<span className="sr-only">Toggle Menu</span>
					<div className="w-6 h-0.5 bg-current mb-1 transition-transform duration-300" />
					<div className="w-6 h-0.5 bg-current mb-1 transition-transform duration-300" />
					<div className="w-6 h-0.5 bg-current transition-transform duration-300" />
				</button>
			</div>
			
			{open && (
				<div id="mobile-nav" className="md:hidden border-t border-black/10 dark:border-white/15">
					<div className="container-responsive py-4 flex flex-col gap-2 bg-white/30 dark:bg-neutral-800/30 backdrop-blur-md rounded-2xl mx-4 my-2 p-4 border border-black/10 dark:border-white/15">
						<a href="/#home" onClick={handleNavClick('home')} className={navItemClass}>Home</a>
						<a href="/#about" onClick={handleNavClick('about')} className={navItemClass}>About</a>
						<a href="/#skills" onClick={handleNavClick('skills')} className={navItemClass}>Skills</a>
						<a href="/#projects" onClick={handleNavClick('projects')} className={navItemClass}>Projects</a>
						<a href="/#experience" onClick={handleNavClick('experience')} className={navItemClass}>Experience</a>
						<a href="/#contact" onClick={handleNavClick('contact')} className={navItemClass}>Contact</a>
						<Link onClick={() => setOpen(false)} to="/playground" className={navItemClass}>Playground</Link>
						<Link onClick={() => setOpen(false)} to="/blog" className={navItemClass}>Blog</Link>
						<button 
							aria-label="Toggle Theme" 
							onClick={() => { toggle(); setOpen(false); }} 
							className="mt-2 px-4 py-2 rounded-full bg-white/40 dark:bg-neutral-800/40 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-neutral-700/60 hover:shadow-md transition-all duration-300 text-left border border-black/10 dark:border-white/15"
						>
							{isDark ? 'Light Mode' : 'Dark Mode'}
						</button>
					</div>
				</div>
			)}
		</header>
	);
}