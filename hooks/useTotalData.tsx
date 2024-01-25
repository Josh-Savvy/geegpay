import { AnalyticsCardsProps } from "@/components/ui/atoms/cards/AnalyticsCard";
import React, { useEffect, useState } from "react";

// type ExtractedDataType = Pick<AnalyticsCardsProps, "name" | "data" | "icon">;

const useTotalData = () => {
	// !Temporary: for simulation purpose
	const dummy = [2111, 411, 3312, 2529, 2611, 1522, 629, 529, 219, 611, 412, 1211, 2231, 500, 1102];

	const [totalOrders, setTotalOrders] = useState<number[]>([]);
	const [totalRefund, setTotalRefund] = useState<number[]>([]);
	const [averageSales, setAverageSales] = useState<number[]>([]);
	const [totalIncome, setTotalIncome] = useState<number[]>([]);

	const [isLoading, setIsLoading] = useState(true);

	const fetchUpdate = () => {
		setTotalOrders((p) => dummy.map(() => Math.floor(Math.random() * 1000)));
		setTotalRefund((p) => dummy.map(() => Math.floor(Math.random() * 1000)));
		setAverageSales((p) => dummy.map(() => Math.floor(Math.random() * 1000)));
		setTotalIncome((p) => dummy.map(() => Math.floor(Math.random() * 2000)));
		setIsLoading(false);
	};

	useEffect(() => {
		fetchUpdate();
	}, []);
	return { totalOrders, isLoading, totalRefund, averageSales, totalIncome };
};

export default useTotalData;
