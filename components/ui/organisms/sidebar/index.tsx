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
				"overflow-hidden xs:overflow-visible duration-300 bg-[#F7F8FA] dark:bg-secondary fixed h-screen xs:sticky top-0 left-0 flex flex-col xs:items-center z-50 py-5",
				isOpen ? "w-full pl-10 xs:w-full xs:max-w-20 xs:pl-0" : "w-0 xs:w-full xs:max-w-20 pl-0 xs:pl-0",
			)}>
			<div className="flex items-center gap-3 relative">
				<AppLogo />
				<h1 className="xs:hidden text-[#26282C] text-lg font-medium">Dashboard</h1>
				<div
					onClick={() => toggle("close")}
					className="xs:hidden absolute text-4xl right-10 cursor-pointer text-black">
					&times;
				</div>
			</div>
			<SidebarLinks />
			<ThemeToggle />
			<div className="flex justify-center flex-col gap-5 items-center absolute bottom-5">
				<CircledArrowRight className="cursor-pointer" />
				<GearIcon className="cursor-pointer" />
				<LogOutIcon className="cursor-pointer" />
			</div>
		</aside>
	);
};

export default Sidebar;
