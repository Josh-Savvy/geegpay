"use client";

import React from "react";
import { AppLogo, CircledArrowRight, GearIcon, LogOutIcon } from "../../atoms/icons";
import SidebarLinks from "./SidebarLinks";
import ThemeToggle from "./ThemeToggle";
import { useSidebarContext } from "@/context/sidebar.context";
import classNames from "classnames";

const Sidebar = () => {
	const { isOpen, toggle } = useSidebarContext();
	return (
		<aside
			className={classNames(
				"overflow-hidden xs:overflow-visible duration-300 bg-[#F7F8FA] dark:bg-[#191919] fixed h-screen xs:sticky top-0 left-0 flex flex-col xs:items-center z-40 py-8",
				isOpen ? "w-full pl-10 xs:w-full xs:max-w-20 xs:pl-0" : "w-0 xs:w-full xs:max-w-20 pl-0 xs:pl-0",
			)}>
			<div className="flex xs:block items-center gap-3 justify-between relative xs:w-auto w-full">
				<div className="flex items-center gap-3">
					<AppLogo />
					<h1 className="xs:hidden text-[#26282C] text-lg font-medium dark:text-white">Dashboard</h1>
				</div>
				<div
					onClick={() => toggle("close")}
					className="-mt-3 pr-10 xs:hidden text-3xl cursor-pointer text-black dark:text-white">
					&times;
				</div>
			</div>
			<ThemeToggle className="xs:hidden" />
			<SidebarLinks />
			<ThemeToggle className="hidden xs:flex" />
			<div className="flex justify-center flex-col gap-8 xs:gap-5 xs:items-center xs:absolute mt-6 xs:mt-0 bottom-5">
				<div className="flex gap-5 cursor-pointer group">
					<CircledArrowRight className="cursor-pointer" />
					<p
						className={classNames(
							"xs:hidden text-sm whitespace-nowrap duration-300 group-hover:dark:text-white dark:text-[#B2ABAB]",
						)}>
						Nav-Item
					</p>
				</div>
				<div className="flex gap-5 cursor-pointer group">
					<GearIcon className="cursor-pointer" />
					<p
						className={classNames(
							"xs:hidden text-sm whitespace-nowrap duration-300 group-hover:dark:text-white dark:text-[#B2ABAB]",
						)}>
						Settings
					</p>
				</div>
				<div className="flex gap-5 cursor-pointer group">
					<LogOutIcon className="cursor-pointer" />
					<p
						className={classNames(
							"xs:hidden text-sm whitespace-nowrap duration-300 group-hover:dark:text-white dark:text-[#B2ABAB]",
						)}>
						Logout
					</p>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
