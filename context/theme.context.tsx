"use client";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type ITheme = "dark" | "light";

type IThemeContext = {
	toggleTheme: (theme?: ITheme) => void;
	currentTheme: ITheme;
};

const ThemeContext = createContext<IThemeContext>({ currentTheme: "light", toggleTheme: () => {} });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [currentTheme, setCurrentTheme] = useState<ITheme>("light");

	const toggleTheme = (theme?: ITheme) => {
		const newTheme = theme || (currentTheme === "light" ? "dark" : "light");
		document.documentElement.setAttribute("data-theme", newTheme);
		setCurrentTheme(newTheme);
	};

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			toggleTheme(savedTheme as ITheme);
		} else {
			const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
			toggleTheme(prefersDarkMode ? "dark" : "light");
		}

		window.addEventListener("storage", (e) => {
			if (e.key === "theme") {
				toggleTheme(e.newValue as ITheme);
			}
		});

		return () => {
			window.removeEventListener("storage", () => {});
		};
	}, []);

	return <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
	return useContext(ThemeContext);
};
