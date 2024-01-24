"use client";

import { useTheme } from "@/context/theme.context";
import React, { useEffect } from "react";
import { Moon, Sun } from "../../atoms/icons";
import classNames from "classnames";
import { useSidebarContext } from "@/context/sidebar.context";

const ThemeToggle = () => {
	const { currentTheme, toggleTheme } = useTheme();

	return (
		<div
			onClick={() => {
				toggleTheme();
			}}
			className="flex xs:flex-col max-w-sm gap-3 bg-white duration-300 p-1.5 rounded-full mt-5 justify-start items-start">
			<div
				className={classNames(
					"flex items-center justify-center cursor-pointer p-2.5 duration-500 rounded-full",
					currentTheme === "light" ? "bg-[#34CAA5]" : "bg-transparent",
				)}>
				<Sun size={20} color={currentTheme === "light" ? "#ffffff" : "#B2ABAB"} />
			</div>
			<div
				className={classNames(
					"flex items-center justify-center cursor-pointer p-1 duration-500 rounded-full",
					currentTheme === "dark" ? "bg-[#34CAA5]" : "bg-transparent",
				)}>
				<Moon size={30} color={currentTheme === "dark" ? "#ffffff" : "#B2ABAB"} />
			</div>
		</div>
	);
};

export default ThemeToggle;
