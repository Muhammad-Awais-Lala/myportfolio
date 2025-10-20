import React, { useState } from 'react';
// import emailjs from '@emailjs/browser'; // Use this when configuring real keys

export default function Contact() {
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [status, setStatus] = useState('');

	const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			// await emailjs.send('service_id', 'template_id', form, 'public_key');
			setStatus('Message sent successfully (demo).');
			setForm({ name: '', email: '', message: '' });
		} catch (e) {
			setStatus('Failed to send message.');
		}
	};

	return (
		<main className="container-responsive py-12">
			<h2 className="text-2xl sm:text-3xl font-bold">Contact / Hire Me</h2>
			<form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
				<input name="name" value={form.name} onChange={onChange} placeholder="Name" required className="px-4 py-3 rounded-md border border-black/10 dark:border-white/20 bg-transparent" />
				<input type="email" name="email" value={form.email} onChange={onChange} placeholder="Email" required className="px-4 py-3 rounded-md border border-black/10 dark:border-white/20 bg-transparent" />
				<textarea name="message" value={form.message} onChange={onChange} placeholder="Message" required className="sm:col-span-2 px-4 py-3 rounded-md border border-black/10 dark:border-white/20 bg-transparent h-32" />
				<div className="sm:col-span-2 flex items-center gap-3">
					<button className="px-5 py-3 rounded-md bg-primary text-white">Send Message</button>
					{status && <span className="text-sm">{status}</span>}
				</div>
			</form>
			<div className="mt-8 flex items-center gap-3">
				<a href="https://github.com/" className="px-3 py-2 rounded-md border border-black/10 dark:border-white/20">GitHub</a>
				<a href="https://www.linkedin.com/" className="px-3 py-2 rounded-md border border-black/10 dark:border-white/20">LinkedIn</a>
				<a href="/resume.pdf" className="px-3 py-2 rounded-md bg-primary text-white">Download Resume</a>
			</div>
		</main>
	);
}
