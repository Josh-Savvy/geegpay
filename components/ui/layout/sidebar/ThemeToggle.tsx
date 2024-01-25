"use client";

import { useTheme } from "@/context/theme.context";
import React, { useEffect } from "react";
import { Moon, Sun } from "../../atoms/icons";
import classNames from "classnames";

const ThemeToggle = ({ className }: { className?: string }) => {
	const { currentTheme, toggleTheme } = useTheme();

	return (
		<div className={classNames("flex justify-start items-start", className)}>
			<div
				onClick={() => toggleTheme()}
				className="cursor-pointer flex xs:flex-col gap-3 bg-white dark:bg-[#0D062D] duration-300 p-1 rounded-full mt-5 justify-start items-start">
				<div
					title="light mode toggle"
					className={classNames(
						"flex items-center justify-center cursor-pointer p-2.5 duration-500 rounded-full",
						currentTheme === "light" ? "bg-[#34CAA5]" : "bg-transparent",
					)}>
					<Sun size={20} color={currentTheme === "light" ? "#ffffff" : "#B2ABAB"} />
				</div>
				<div
					title="dark mode toggle"
					className={classNames(
						"flex items-center justify-center cursor-pointer p-1 duration-500 rounded-full",
						currentTheme === "dark" ? "bg-[#34CAA5]" : "bg-transparent",
					)}>
					<Moon size={30} color={currentTheme === "dark" ? "#ffffff" : "#B2ABAB"} />
				</div>
			</div>
		</div>
	);
};

export default ThemeToggle;
