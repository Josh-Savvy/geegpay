import React from "react";
import { AppLogo } from "../../atoms/icons";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
	return (
		<aside className="w-full max-w-20 bg-[#F7F8FA] sticky top-0 left-0 flex flex-col items-center py-5">
			<AppLogo />
			<SidebarLinks />
		</aside>
	);
};

export default Sidebar;
