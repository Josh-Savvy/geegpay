import React from "react";
import * as AnalyticsIcons from "@/components/ui/atoms/icons/special";
import { TrendingMovementIcon } from "../icons";
import classNames from "classnames";
import AreaChartComponent from "../charts/AreaChartComponent";

export type AnalyticsCardsProps = {
	icon: keyof typeof AnalyticsIcons;
	name: string;
	percentage: number;
	is_money?: boolean;
	data: number[];
};

const AnalyticsCards = ({ icon, name, percentage, is_money, data }: AnalyticsCardsProps) => {
	const IconComp = icon && AnalyticsIcons[icon];
	const value = data.reduce((acc, currentValue) => acc + currentValue, 0);
	const percentageThreshold = percentage > 40;
	return (
		<div className="flex flex-col justify-around gap-2 w-full rounded-xl bg-white dark:bg-[#181818] dark:border-[#B2ABAB] dark:border-opacity-20 border border-[#EDF2F7] md:p-3 p-5 lg:p-5 xl:p-3 duration-300">
			<div className="flex justify-between items-center">
				<div className="rounded-full border border-[#E6E6E6] dark:border-[#B2ABAB] dark:border-opacity-50 w-10 h-10 flex justify-center items-center">
					<IconComp />
				</div>
				<div className="">
					<AreaChartComponent<number> data={data} />
				</div>
			</div>
			<h1 className="text-[#898989] capitalize dark:text-white duration-300">{name}</h1>
			<p className="sm:text-xl text-lg dark:text-white">
				{is_money ? "$" + value.toLocaleString() : value.toLocaleString()}
			</p>
			{/* Todo: implement dynamic percentage system */}
			<span className="tracking-tight flex items-center text-sm gap-1.5 w-full">
				<span
					className={`flex items-center gap-2 p-1 px-3 rounded-full duration-300 ${
						!percentageThreshold ? "bg-[#ED544E]/10 text-[#ED544E]" : "bg-[#34CAA5]/10 text-[#34CAA5]"
					}`}>
					<TrendingMovementIcon
						color={percentageThreshold ? "#34CAA5" : "#ED544E"}
						className={classNames("duration-300", percentageThreshold ? "" : "rotate-[60deg]")}
						size={15}
					/>
					{percentage}
				</span>
				<p className="flex-grow dark:text-white whitespace-nowrap font_inter"> vs. previous month</p>
			</span>
			{/* &&  */}
		</div>
	);
};

export default AnalyticsCards;
