"use client";

import React, { useMemo } from "react";
import AnalyticsCard, { AnalyticsCardsProps } from "../atoms/cards/AnalyticsCard";
import useTotalData from "@/hooks/useTotalData";

const TotalAnalytics = () => {
	const { totalOrders, averageSales, totalIncome, totalRefund, isLoading } = useTotalData();

	const analyticsData: Omit<AnalyticsCardsProps, "index">[] = useMemo(
		() => [
			{
				icon: "AnalyticsBoxIcon",
				name: "Total Orders",
				data: totalOrders,
			},
			{
				icon: "ThreeD_BoxIcon",
				name: "Total Refund",
				data: totalRefund,
			},
			{
				icon: "CartIcon",
				name: "Average Sales",
				data: averageSales,
			},
			{
				icon: "CoinIcon",
				name: "Total Income",
				is_money: true,
				data: totalIncome,
			},
		],
		[totalOrders, averageSales, totalIncome, totalRefund],
	);

	return (
		<div className="grid sm:grid-cols-2 gap-4">
			{analyticsData.map(({ name, data, icon, is_money }, index) => {
				return (
					<AnalyticsCard
						key={index}
						{...{
							index,
							isLoading,
							icon,
							name,
							data,
							is_money,
						}}
					/>
				);
			})}
		</div>
	);
};

export default TotalAnalytics;
