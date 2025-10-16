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
