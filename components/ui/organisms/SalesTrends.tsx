"use client";
import React, { useState } from "react";
import { ChevronDown } from "../atoms/icons";
import { useTheme } from "@/context/theme.context";
import BarChartComponent from "../atoms/charts/BarChartComponent";

const SalesTrends = () => {
	const filters = ["Daily", "Weekly", "Monthly", "Yearly"];
	const [currentFilter, setCurrentFilter] = useState<string>(filters[1]);
	const { currentTheme } = useTheme();

	return (
		<div className="w-full rounded-xl dark:bg-[#181818] bg-white border border-[#EDF2F7] dark:border-[#B2ABAB] dark:border-opacity-20 p-5 xl:p-3 duration-300">
			<div className="flex items-center justify-between">
				<h1 className="text-lg dark:text-white">Sales Trends</h1>
				<div className="flex items-center gap-3">
					<p className="text-sm sm:block hidden dark:text-white">Sort by</p>
					<div className="group relative border border-[#E1DFDF] dark:border-opacity-50 rounded-full w-32 p-1.5 px-3 cursor-pointer flex items-center justify-between gap-5">
						<p className="text-sm dark:text-white">{currentFilter}</p>
						<ChevronDown
							size={15}
							className="group-hover:rotate-[180deg] fill-current text-[#0D062D] dark:text-[#b2abab] duration-300"
							color={currentTheme === "dark" ? "#b2abab" : ""}
						/>
						<div className="absolute z-10 group-hover:flex flex-col gap-1 hidden left-0 origin-top top-0 w-full pt-9">
							<ul className="w-full bg-white dark:bg-[#181818] border border-[#E1DFDF] dark:border-black duration-300">
								{filters.map((fil, id) => (
									<li
										onClick={() => setCurrentFilter(fil)}
										key={id}
										className="text-sm p-3 duration-300 dark:hover:bg-dark_bg hover:bg-zinc-200 dark:text-white">
										{fil}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="h-[50dvh] w-full mt-6 text-xs">
				<BarChartComponent />
			</div>
		</div>
	);
};

export default SalesTrends;
