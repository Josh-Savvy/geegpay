"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "../atoms/icons";
import { useTheme } from "@/context/theme.context";
import BarChartComponent, { BarChartFilter } from "../atoms/charts/BarChartComponent";

const SalesTrends = () => {
	const filters: BarChartFilter[] = ["Daily", "Weekly", "Monthly", "Yearly"];
	const [currentFilter, setCurrentFilter] = useState<BarChartFilter>(filters[2]);
	const { currentTheme } = useTheme();
	const [data, setData] = useState<number[]>([35.0, 25.0, 20.0, 50, 28.9, 23.9, 30, 234, 234, 1324]);
	const [initialLoading, setInitialLoading] = useState<boolean>(true);

	const fetchData = () => {
		if (initialLoading) setInitialLoading(false);
		setData((d) => d.map(() => Math.random() * 100)); // Generate new random data
	};

	useEffect(() => {
		// Simulation of data fetching
		fetchData();
		let interval: NodeJS.Timeout;
		if (currentFilter === "Realtime") {
			// Simulation of real-time data
			fetchData();
			interval = setInterval(() => {
				fetchData();
			}, 5000);
		}
		return () => {
			clearInterval(interval);
		};
	}, [currentFilter]);

	return (
		<div className="w-full rounded-xl dark:bg-[#181818] bg-white border border-[#EDF2F7] dark:border-[#B2ABAB] dark:border-opacity-20 p-5 xl:p-3 duration-300">
			<div className="flex items-center justify-between">
				<h1 className="text-[18px] text-[#26282C] dark:text-white font-medium">Sales Trends</h1>
				<div className="flex items-center gap-3">
					<p className="text-sm sm:block hidden dark:text-white text-[#3A3F51]">Sort by</p>
					<div className="group relative border border-[#E1DFDF] dark:border-opacity-50 rounded-full w-32 p-1.5 px-3 cursor-pointer flex items-center justify-between gap-5">
						<p className="text-[12px] dark:text-white text-[#3A3F51]">{currentFilter}</p>
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
			<div className="h-[50dvh] w-full mt-8 text-xs">
				{initialLoading ? (
					<div className="flex justify-center duration-300 items-center w-full h-full">
						<div className="flex justify-center items-center h-16 w-16 rounded-full relative overflow-hidden  bg-gradient-to-r from-[#34CAA5] to-[#fff] animate-spin">
							<div className="duration-300 absolute h-[90%] w-[90%] bg-white dark:bg-[#181818] rounded-full" />
						</div>
					</div>
				) : (
					<BarChartComponent data={data} />
				)}
			</div>
		</div>
	);
};

export default SalesTrends;
