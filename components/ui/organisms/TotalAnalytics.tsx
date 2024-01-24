// "use client"
import React from "react";
import AnalyticsCards, { AnalyticsCardsProps } from "../atoms/cards/AnalyticsCard";

const TotalAnalytics = () => {
	const analyticsData: AnalyticsCardsProps[] = [
		{
			icon: "AnalyticsBoxIcon",
			name: "Total Orders",
			percentage: 23.5,
			data: [2931, 2138, 129832, 382232],
		},
		{
			icon: "ThreeD_BoxIcon",
			name: "Total Orders",
			percentage: 53.5,
			data: [2931, 2138, 129832, 382232],
		},
		{ icon: "CartIcon", name: "Total Orders", percentage: 83.5, data: [2931, 2138, 129832, 382232] },
		{
			icon: "CoinIcon",
			name: "Total Orders",
			percentage: 23.5,
			is_money: true,
			data: [2931, 2138, 129832, 382232],
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
