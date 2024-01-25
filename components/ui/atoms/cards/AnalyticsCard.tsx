import React, { useMemo } from "react";
import * as AnalyticsIcons from "@/components/ui/atoms/icons/special";
import { TrendingMovementDownIcon, TrendingMovementUpIcon } from "../icons";
import classNames from "classnames";
import AreaChartComponent from "../charts/AreaChartComponent";
import { calculatePercentage } from "@/utils";

export type AnalyticsCardsProps = {
	icon: keyof typeof AnalyticsIcons;
	name: string;
	is_money?: boolean;
	data: number[];
	index: number;
	isLoading?: boolean;
};
// stroke =34CAA5

const AnalyticsCard = ({ icon, name, is_money, data, isLoading, index }: AnalyticsCardsProps) => {
	const IconComp = icon && AnalyticsIcons[icon];
	const value = data.reduce((acc, currentValue) => acc + currentValue, 0);

	//! Temporary: for simulation purpose
	const percentage: number = useMemo(() => calculatePercentage(data), [data]);
	const percentageThreshold = percentage > 6;
	//

	const colors = ["#77B900", "#FF4A55"];
	const color = percentageThreshold ? colors[0] : colors[1];

	// percentageThreshold ? "#34CAA5" : "#ED544E"

	return isLoading ? (
		<LoadingComponent />
	) : (
		<div
			className={classNames(
				"cursor-pointer flex flex-col justify-around gap-2 w-full rounded-xl bg-white dark:bg-[#181818] dark:border-[#B2ABAB] dark:border-opacity-20 border border-[#EDF2F7] md:p-3 p-5 lg:p-5 xl:p-3 duration-300 hover:border-[#d2e6fb] dark:hover:border-[#a19b9b]",
			)}>
			<div className="flex justify-between items-center">
				<div className="rounded-full border border-[#E6E6E6] dark:border-[#B2ABAB] dark:border-opacity-50 w-10 h-10 flex justify-center items-center">
					<IconComp />
				</div>
				<div className="w-full max-w-[65%] xl:h-10 h-14">
					<AreaChartComponent {...{ color, strokeColor: color, data }} />
				</div>
			</div>
			<h1 className="text-[#898989] capitalize dark:text-white duration-300 sm:text-[18px]">{name}</h1>
			<p className="sm:text-[24px] text-lg text-[#3A3F51] dark:text-white font-medium">
				{is_money ? "$" + value.toLocaleString() : value.toLocaleString()}
			</p>
			{/* Todo: implement dynamic percentage system */}
			<span className="tracking-tight flex items-center text-sm gap-1.5 w-full">
				<span
					className={`flex items-center gap-1 p-1 px-3 rounded-full duration-300 ${
						!percentageThreshold ? "bg-[#ED544E]/10 text-[#ED544E]" : "bg-[#34CAA5]/10 text-[#34CAA5]"
					}`}>
					{percentageThreshold ? (
						<TrendingMovementUpIcon color={"#34CAA5"} size={15} />
					) : (
						<TrendingMovementDownIcon color={"#ED544E"} size={15} />
					)}
					{percentage.toFixed(1)}%
				</span>
				<p className="flex-grow dark:text-white whitespace-nowrap font_inter"> vs. previous month</p>
			</span>
			{/* &&  */}
		</div>
	);
};
const LoadingComponent = () => {
	return (
		<div
			className={classNames(
				"flex flex-col justify-around gap-2 w-full rounded-xl bg-white dark:bg-[#181818] dark:border-[#B2ABAB] dark:border-opacity-20 border border-[#EDF2F7] md:p-3 p-5 lg:p-5 xl:p-3 duration-300",
			)}>
			<div className="flex justify-between items-center">
				<div className="flex justify-start items-start">
					<div className="h-full w-full bg-gray-200 dark:bg-[#121212] animate-pulse duration-300 rounded-full p-6" />
				</div>
				<div className="w-full max-w-[65%] xl:h-12 h-14 relative overflow-hidden">
					<div className="animate-pulse bg-gray-200 dark:bg-[#121212] duration-300 absolute top-0 left-0 h-full w-full" />
				</div>
			</div>
			<div className="w-20 mt-7 bg-gray-200 dark:bg-[#121212] animate-pulse px-4 p-2" />
			<span className="tracking-tight flex items-center text-sm gap-1.5 w-full">
				<div className="w-full mt-7 bg-gray-200 dark:bg-[#121212] animate-pulse px-4 p-1" />
				<div className="w-full mt-7 bg-gray-200 dark:bg-[#121212] animate-pulse px-4 p-1" />
			</span>
			{/* &&  */}
		</div>
	);
};

export default AnalyticsCard;
