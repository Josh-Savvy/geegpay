import React from "react";
import Progress from "../common/Progress";

const TopPlatform = () => {
	const colors = ["bg-[#6160DC]", "bg-[#54C5EB]", "bg-warning", "bg-danger"];
	// console.log(platforms.map((p) => p.value).toString().split());
	return (
		<div className="w-full rounded-xl dark:bg-gray-600 bg-white border border-[#EDF2F7] dark:border-[#B2ABAB] dark:border-opacity-50 p-5 xl:p-3 duration-300">
			<div className="flex items-center justify-between">
				<h1 className="text-lg dark:text-white">Top Platforms</h1>
				<div className="flex items-center gap-3">
					<p className="text-[#34CAA5] hover:underline select-none cursor-pointer">See all</p>
				</div>
			</div>
			<div className="grid gap-3 mt-5">
				{platforms.map(({ label, value }, id) => (
					<div key={id}>
						<p className="">{label}</p>
						<Progress
							{...{
								value,
								label: "$" + value?.toLocaleString(),
								color: colors[id],
								overall: Number(platforms.map((p) => p.value).toString()),
							}}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

type IPlatform = { label: string; value: number };

const platforms: IPlatform[] = [
	{ label: "Book Bazaar", value: 2500000 },
	{ label: "Artisan Aisle", value: 1800000 },
	{ label: "Toy Troop", value: 1200000 },
	{ label: "XStore", value: 90000 },
];
export default TopPlatform;
