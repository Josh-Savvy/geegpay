import React from "react";
import Progress from "../common/Progress";

const TopPlatform = () => {
	const colors = ["#6160DC", "#54C5EB", "#FFB74A", "#FF4A55"];
	return (
		<div className="w-full rounded-xl dark:bg-[#181818] bg-white p-5 xl:p-3 duration-300">
			<div className="flex items-center justify-between">
				<h1 className="text-[18px] text-[#26282C] dark:text-white font-medium">Top Platforms</h1>
				<div className="flex items-center gap-3">
					<p className="text-[#34CAA5] hover:underline select-none cursor-pointer text-[18px] font-medium">
						See all
					</p>
				</div>
			</div>
			<div className="grid gap-3 mt-5">
				{platforms.map(({ label, data }, id) => {
					const value = data.reduce((acc, curr) => acc + curr, 0);
					const totalSales = platforms.reduce(
						(acc, platform) => acc + platform.data.reduce((a, b) => a + b, 0),
						0,
					);
					const percentage = Number((data.reduce((acc, value) => acc + value, 0) / totalSales) * 100);
					return (
						<div key={id} className="grid gap-1">
							<p className="text-[#22242C] dark:text-[#fafafa] duration-200">{label}</p>
							<Progress
								{...{
									value,
									label: (
										<div className="flex justify-between items-center text-[#525252] font-normal">
											<p className="">${value.toLocaleString()}</p>
											<p className="tracking-tight">+{percentage.toFixed(1)}%</p>
										</div>
									),
									color: colors[id],
									percentage,
									height: 6,
									width: percentage + 100,
								}}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

type IPlatform = { label: string; data: number[] };

const platforms: IPlatform[] = [
	{ label: "Book Bazaar", data: [223012, 234923, 228454, 154023] },
	{ label: "Artisan Aisle", data: [362404, 241393, 341484, 223211] },
	{ label: "Toy Troop", data: [224816, 315304, 225600, 346030, 346402] },
	{ label: "XStore", data: [1642103, 232320, 144400, 164363, 233240] },
];
export default TopPlatform;
