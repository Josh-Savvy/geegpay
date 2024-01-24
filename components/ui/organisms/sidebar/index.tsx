import React from "react";
import { AppLogo, CircledArrowRight, GearIcon, LogOutIcon } from "../../atoms/icons";
import SidebarLinks from "./SidebarLinks";
import ThemeToggle from "./ThemeToggle";

const Sidebar = () => {
	return (
		<aside className="w-full xs:max-w-20 duration-300 bg-[#F7F8FA] dark:bg-secondary fixed h-screen xs:sticky top-0 left-0 flex flex-col xs:items-center py-5 z-50 pl-10 xs:pl-0">
			<div className="flex items-center gap-3">
				<AppLogo />
				<h1 className="xs:hidden text-[#26282C] text-lg font-medium">Dashboard</h1>
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
