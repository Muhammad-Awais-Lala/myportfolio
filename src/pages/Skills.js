import React from 'react';
import SEO from '../components/SEO';
import { FaReact, FaNodeJs, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiVercel, SiPostman, SiAntdesign } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const Section = ({ title, children }) => (
	<section className="mt-8">
		<h3 className="text-xl font-semibold">{title}</h3>
		<div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
			{children}
		</div>
	</section>
);

const SkillCard = ({ icon: Icon, label }) => (
	<div className="p-4 rounded-lg border border-black/5 dark:border-white/10 hover:shadow-soft transition-shadow flex items-center gap-3">
		<Icon size={20} />
		<span>{label}</span>
	</div>
);

export default function Skills() {
	return (
		<main className="container-responsive py-12">
			<SEO title="Skills" description="Frontend, Backend, and Tools – MERN Stack skillset of Muhammad Awais." />
			<h2 className="text-2xl sm:text-3xl font-bold">Skills / Tech Stack</h2>
			<Section title="Frontend">
				<SkillCard icon={FaReact} label="React" />
				<SkillCard icon={SiJavascript} label="JavaScript" />
				<SkillCard icon={SiTailwindcss} label="Tailwind CSS" />
				<SkillCard icon={FaBootstrap} label="Bootstrap" />
				<SkillCard icon={SiAntdesign} label="Ant Design" />
			</Section>
			<Section title="Backend">
				<SkillCard icon={FaNodeJs} label="Node.js" />
				<SkillCard icon={SiExpress} label="Express.js" />
				<SkillCard icon={SiMongodb} label="MongoDB" />
				<SkillCard icon={SiMysql} label="MySQL" />
			</Section>
			<Section title="Tools">
				<SkillCard icon={FaGitAlt} label="Git" />
				<SkillCard icon={VscCode} label="VS Code" />
				<SkillCard icon={SiPostman} label="Postman" />
				<SkillCard icon={SiVercel} label="Vercel" />
			</Section>
		</main>
	);
}
