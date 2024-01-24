import React from "react";
import SearchBar from "../../atoms/inputs/SearchBar";
import { BellIcon, CalendarIcon } from "../../atoms/icons";
import months from "@/data/months.json";
import ProfileCard from "./ProfileCard";

const Navbar = () => {
	const currentDate = new Date();
	const todaysDate = `${months[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
	return (
		<nav className="flex justify-between items-center p-3 pt-5 border-b-2 border-opacity-50 border-[#E5EAEF]">
			<h1 className="text-[#26282C] text-lg font-medium">Dashboard</h1>
			<div className="flex items-center gap-4 ">
				{/* Search */}
				<SearchBar type="search" />
				{/* Calendar */}
				<div className="flex items-center gap-3">
					<CalendarIcon />
					<p className="font-medium text-sm">{todaysDate}</p>
				</div>
				{/* Notification */}
				<div className="border-[#DADDDD] hover:border-black/30 border rounded-full hover:bg-[#DADDDD]/30 p-3 flex justify-center items-center duration-300 cursor-pointer">
					<BellIcon />
				</div>
				{/* Profile */}
				<ProfileCard />
			</div>
		</nav>
	);
};

export default Navbar;
