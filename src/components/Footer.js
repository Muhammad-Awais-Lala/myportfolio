import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className="border-t border-black/5 dark:border-white/10 mt-16">
			<div className="container-responsive py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
				<p className="text-sm">© {new Date().getFullYear()} Muhammad Awais. All rights reserved.</p>
				<div className="flex items-center gap-3">
					<a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded hover:bg-black/5 dark:hover:bg-white/10"><FaGithub size={18} /></a>
					<a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded hover:bg-black/5 dark:hover:bg-white/10"><FaLinkedin size={18} /></a>
					<a href="/resume.pdf" className="px-3 py-2 rounded-md bg-primary text-white text-sm shadow-soft">Download Resume</a>
				</div>
			</div>
		</footer>
	);
}
