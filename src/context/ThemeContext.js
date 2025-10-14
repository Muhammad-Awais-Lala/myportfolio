import React, { createContext, useEffect, useMemo, useState } from 'react';

export const ThemeContext = createContext({
	isDark: false,
	toggle: () => {},
});

export function ThemeProvider({ children }) {
	const [isDark, setIsDark] = useState(() => {
		const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
		return stored ? stored === 'dark' : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	});

	useEffect(() => {
		const root = document.documentElement;
		if (isDark) {
			root.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			root.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [isDark]);

	const value = useMemo(() => ({
		isDark,
		toggle: () => setIsDark((v) => !v),
	}), [isDark]);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
