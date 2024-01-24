import Image from "next/image";
import React from "react";
import { ChevronDown } from "../../atoms/icons";

const ProfileCard = () => {
	return (
		<div className="flex items-center gap-2 border border-[#D9D9D9] rounded-full p-0.5 px-1.5 pr-4 hover:bg-[#D9D9D9]/30 hover:border-black/30 duration-300 cursor-pointer">
			<div className="w-10 h-10 overflow-hidden rounded-full bg-zinc-200">
				<Image src={"/assets/images/user.png"} alt="user" height={100} width={100} loading="lazy" unoptimized />
			</div>
			<div className="">
				<h1 className="text-[#26282C]">Justin Bergson</h1>
				<p className="text-[#787486] text-sm lowercase">Justin@gmail.com</p>
			</div>
			<ChevronDown />
		</div>
	);
};

export default ProfileCard;
