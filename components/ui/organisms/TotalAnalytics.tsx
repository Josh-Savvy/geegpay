// "use client"
import React from "react";
import AnalyticsCards, { AnalyticsCardsProps } from "../atoms/cards/AnalyticsCard";

const TotalAnalytics = () => {
	const analyticsData: AnalyticsCardsProps[] = [
		{
			icon: "AnalyticsBoxIcon",
			name: "Total Orders",
			percentage: 23.5,
			data: [21, 23, 59, 29],
		},
		{
			icon: "ThreeD_BoxIcon",
			name: "Total Orders",
			percentage: 53.5,
			data: [30, 93, 30, 21],
		},
		{ icon: "CartIcon", name: "Total Orders", percentage: 83.5, data: [1102, 211, 231, 100] },
		{
			icon: "CoinIcon",
			name: "Total Orders",
			percentage: 23.5,
			is_money: true,
			data: [32, 41, 40, 21],
		},
	];
	// allOrdersData
	return (
		<div className="grid sm:grid-cols-2 gap-4">
			{analyticsData.map(({ icon, name, percentage, is_money, data }, index) => {
				return <AnalyticsCards key={index} {...{ icon, name, percentage, data, is_money }} />;
			})}
		</div>
	);
};

export default TotalAnalytics;
