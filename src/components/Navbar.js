import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
	const { isDark, toggle } = useContext(ThemeContext);
	const [open, setOpen] = useState(false);

	const navItemClass = ({ isActive }) =>
		`px-3 py-2 rounded-md text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 ${
			isActive ? 'text-primary-foreground dark:text-white' : 'text-gray-700 dark:text-gray-200'
		}`;

	return (
		<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
			<div className="container-responsive flex items-center justify-between h-16">
				<Link to="/" className="font-semibold text-lg">Muhammad Awais</Link>
				<nav className="hidden md:flex items-center gap-1">
					<NavLink to="/" className={navItemClass} end>Home</NavLink>
					<NavLink to="/about" className={navItemClass}>About</NavLink>
					<NavLink to="/skills" className={navItemClass}>Skills</NavLink>
					<NavLink to="/projects" className={navItemClass}>Projects</NavLink>
					<NavLink to="/experience" className={navItemClass}>Experience</NavLink>
					<NavLink to="/contact" className={navItemClass}>Contact</NavLink>
					<NavLink to="/playground" className={navItemClass}>Playground</NavLink>
					<NavLink to="/blog" className={navItemClass}>Blog</NavLink>
					<button aria-label="Toggle Theme" onClick={toggle} className="ml-2 p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10">
						{isDark ? <Sun size={18} /> : <Moon size={18} />}
					</button>
				</nav>
				<button className="md:hidden p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav">
					<span className="sr-only">Toggle Menu</span>
					<div className="w-6 h-0.5 bg-current mb-1" />
					<div className="w-6 h-0.5 bg-current mb-1" />
					<div className="w-6 h-0.5 bg-current" />
				</button>
			</div>
			{open && (
				<div id="mobile-nav" className="md:hidden border-t border-black/5 dark:border-white/10">
					<div className="container-responsive py-2 flex flex-col">
						<NavLink onClick={() => setOpen(false)} to="/" className={navItemClass} end>Home</NavLink>
						<NavLink onClick={() => setOpen(false)} to="/about" className={navItemClass}>About</NavLink>
						<NavLink onClick={() => setOpen(false)} to="/skills" className={navItemClass}>Skills</NavLink>
						<NavLink onClick={() => setOpen(false)} to="/projects" className={navItemClass}>Projects</NavLink>
						<NavLink onClick={() => setOpen(false)} to="/experience" className={navItemClass}>Experience</NavLink>
						<NavLink onClick={() => setOpen(false)} to="/contact" className={navItemClass}>Contact</NavLink>
						<NavLink onClick={() => setOpen(false)} to="/playground" className={navItemClass}>Playground</NavLink>
						<NavLink onClick={() => setOpen(false)} to="/blog" className={navItemClass}>Blog</NavLink>
						<button aria-label="Toggle Theme" onClick={() => { toggle(); setOpen(false); }} className="mt-2 px-3 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 text-left">{isDark ? 'Light Mode' : 'Dark Mode'}</button>
					</div>
				</div>
			)}
		</header>
	);
}
