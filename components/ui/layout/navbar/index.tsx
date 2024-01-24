import React from "react";
import SearchBar from "../../atoms/inputs/SearchBar";
import { BellIcon, CalendarIcon } from "../../atoms/icons";
import ProfileCard from "./ProfileCard";
import { formatDate } from "@/utils";
import Hamburger from "./Hamburger";

const Navbar = () => {
	return (
		<nav className="duration-300 flex justify-between items-center p-3 pt-5 border-b border-opacity-50 border-[#E5EAEF] dark:border-[#555] sticky top-0 dark:bg-gray-800 bg-[#fafafa] z-40">
			<div className="text-[#26282C] text-lg font-medium dark:text-white flex items-center gap-3">
				<Hamburger />
				<p className="cursor-pointer">Dashboard</p>
			</div>
			<div className="flex items-center gap-4">
				{/* Search */}
				<div className="lg:inline-block hidden">
					<SearchBar
						type="search"
						containerProps={{
							className: "dark:text-white dark:bg-gray-600 dark:border-[#B2ABAB] dark:border-opacity-50",
						}}
					/>
				</div>
				{/* Calendar */}
				<div className="hidden md:flex items-center gap-3">
					<CalendarIcon />
					<p className="font-medium text-sm dark:text-white">{formatDate()}</p>
				</div>
				{/* Notification */}
				<div className="border-[#DADDDD] dark:border-[#B2ABAB] hover:border-black/30 border rounded-full hover:bg-[#DADDDD]/30 p-3 flex justify-center items-center duration-300 cursor-pointer">
					<BellIcon />
				</div>
				{/* Profile */}
				<ProfileCard />
			</div>
		</nav>
	);
};

export default Navbar;
