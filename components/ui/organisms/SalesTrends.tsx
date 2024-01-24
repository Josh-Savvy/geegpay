"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "../atoms/icons";
import { useTheme } from "@/context/theme.context";

const SalesTrends = () => {
	const filters = ["Daily", "Weekly", "Monthly", "Yearly"];
	const [currentFilter, setCurrentFilter] = useState<string>(filters[1]);
	// const { currentTheme } = useTheme();

	// useEffect(() => {
	// 	console.log({ currentTheme });
	// }, [currentTheme]);

	return (
		<div className="w-full rounded-xl dark:bg-gray-600 bg-white border border-[#EDF2F7] dark:border-[#B2ABAB] dark:border-opacity-50 p-5 xl:p-3 duration-300">
			<div className="flex items-center justify-between">
				<h1 className="text-lg dark:text-white">Sales Trends</h1>
				<div className="flex items-center gap-3">
					<p className="text-sm sm:block hidden dark:text-white">Sort by</p>
					<div className="group relative border border-[#E1DFDF] rounded-full w-32 p-1.5 px-3 cursor-pointer flex items-center justify-between gap-5">
						<p className="text-sm dark:text-white">{currentFilter}</p>
						<ChevronDown size={15} className="group-hover:rotate-[180deg] duration-300" />
						<div className="absolute z-10 group-hover:flex flex-col gap-1 hidden left-0 origin-top top-0 w-full pt-9">
							<ul className="w-full bg-white dark:bg-gray-600 border border-[#E1DFDF] dark:border-black duration-300">
								{filters.map((fil, id) => (
									<li
										onClick={() => setCurrentFilter(fil)}
										key={id}
										className="p-3 duration-300 hover:bg-zinc-200 dark:text-white hover:dark:text-black">
										{fil}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SalesTrends;
