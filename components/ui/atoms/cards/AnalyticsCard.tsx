import React from "react";
import * as AnalyticsIcons from "@/components/ui/atoms/icons/special";
import { TrendingMovementIcon } from "../icons";
import classNames from "classnames";

export type AnalyticsCardsProps = {
	icon: keyof typeof AnalyticsIcons;
	name: string;
	value: number;
	percentage: number;
	is_money?: boolean;
};

const AnalyticsCards = ({ icon, name, percentage, value, is_money }: AnalyticsCardsProps) => {
	const IconComp = icon && AnalyticsIcons[icon];
	const percentageThreshold = percentage > 40;
	return (
		<div className="flex flex-col gap-2 w-full rounded-xl bg-white border border-[#EDF2F7] p-5 xl:p-3 duration-300">
			<div className="flex justify-between items-center">
				<div className="rounded-full border border-[#E6E6E6] w-10 h-10 flex justify-center items-center">
					<IconComp />
				</div>
				<div className="">Chart</div>
			</div>
			<h1 className="text-[#898989] capitalize">{name}</h1>
			<p className="text-lg">{is_money ? "$" + value.toLocaleString() : value}</p>
			{/* Todo: implemented dynamic percentage system */}
			<span className="flex items-center text-sm gap-1 w-full">
				<span
					className={`flex items-center gap-1 p-1 px-3 rounded-full duration-300 ${
						!percentageThreshold ? "bg-[#ED544E]/10 text-[#ED544E]" : "bg-[#34CAA5]/10 text-[#34CAA5]"
					}`}>
					<TrendingMovementIcon
						color={percentageThreshold ? "#34CAA5" : "#ED544E"}
						className={classNames("duration-300", percentageThreshold ? "" : "rotate-[60deg]")}
						size={15}
					/>
					{percentage}
				</span>
				<p className="flex-grow" style={{ fontFamily: "Inter" }}> vs. previous month</p>
			</span>
			{/* &&  */}
		</div>
	);
};

export default AnalyticsCards;
