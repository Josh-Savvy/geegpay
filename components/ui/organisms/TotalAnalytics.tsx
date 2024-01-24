// "use client"
import React from "react";
import AnalyticsCards, { AnalyticsCardsProps } from "../atoms/cards/AnalyticsCard";

const TotalAnalytics = () => {
	const analyticsData: AnalyticsCardsProps[] = [
		{ icon: "AnalyticsBoxIcon", name: "Total Orders", percentage: 23.5, value: 350 },
		{ icon: "ThreeD_BoxIcon", name: "Total Orders", percentage: 53.5, value: 270 },
		{ icon: "CartIcon", name: "Total Orders", percentage: 83.5, value: 1567 },
		{ icon: "CoinIcon", name: "Total Orders", percentage: 23.5, value: 350000, is_money: true },
	];
	return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
			{analyticsData.map(({ icon, name, percentage, value, is_money }, index) => {
				return <AnalyticsCards key={index} {...{ icon, name, percentage, value, is_money }} />;
			})}
		</div>
	);
};

export default TotalAnalytics;
