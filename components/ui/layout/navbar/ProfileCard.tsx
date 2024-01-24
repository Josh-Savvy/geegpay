import Image from "next/image";
import React from "react";
import { ChevronDown } from "../../atoms/icons";

const ProfileCard = () => {
	return (
		<div className="flex items-center gap-2 border border-[#D9D9D9] rounded-full p-0.5 sm:px-1.5 sm:pr-4 hover:bg-[#D9D9D9]/30 hover:border-black/30 duration-300 cursor-pointer">
			<div className="w-10 h-10 overflow-hidden rounded-full bg-zinc-200">
				<Image src={"/assets/images/user.png"} alt="user" height={100} width={100} loading="lazy" unoptimized />
			</div>
			<div className="hidden sm:grid duration-300">
				<h1 className="text-[#26282C] dark:text-white">Justin Bergson</h1>
				<p className="text-[#787486] dark:text-white/60 text-sm lowercase">Justin@gmail.com</p>
			</div>
			<ChevronDown className="sm:flex hidden text-[#d31119]" />
		</div>
	);
};

export default ProfileCard;
