import React from "react";
import SearchBar from "../../atoms/inputs/SearchBar";
import { CalendarIcon } from "../../atoms/icons";
import ProfileCard from "./ProfileCard";
import { formatDate } from "@/utils";
import Hamburger from "./Hamburger";
import NotificationBell from "../../common/NotificationBell";

const Navbar = () => {
	return (
		<nav className="duration-300 flex justify-between items-center p-3 pt-3 border-b border-l dark:border-opacity-20 border-opacity-50 border-[#E5EAEF] dark:border-[#555] sticky top-0 dark:bg-[#0C0A09] bg-[#fafafa] z-30">
			<div className="text-[#26282C] text-lg font-medium dark:text-white flex items-center gap-2">
				<Hamburger />
				<p className="cursor-pointer">Dashboard</p>
			</div>
			<div className="flex items-center gap-4">
				{/* Search */}
				<div className="lg:inline-block hidden">
					<SearchBar
						type="search"
						placeholder="Search..."
						className="text-[#A3A3A3] text-sm"
						containerProps={{
							className: "dark:text-white dark:bg-[#181818] dark:border-[#B2ABAB] dark:border-opacity-20",
						}}
					/>
				</div>
				{/* Calendar */}
				<div className="hidden md:flex items-center gap-3">
					<CalendarIcon className="fill-current stroke-current dark:text-[#b2abab] text-black" />
					<p className="font-normal text-sm dark:text-white font_inter">{formatDate()}</p>
				</div>
				{/* Notification */}
				<NotificationBell />
				{/* Profile */}
				<ProfileCard />
			</div>
		</nav>
	);
};

export default Navbar;
