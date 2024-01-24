import LatestOrders from "@/components/ui/organisms/LatestOrders";
import SalesTrends from "@/components/ui/organisms/SalesTrends";
import TopPlatform from "@/components/ui/organisms/TopPlatform";
import TotalAnalytics from "@/components/ui/organisms/TotalAnalytics";
import React from "react";

const MainDashboardTemplate = () => {
	return (
		<section className="grid grid-cols-12 gap-4 py-5 duration-300">
			<div className="xl:col-span-7 col-span-12 grid gap-4 duration-300">
				<SalesTrends />
				<LatestOrders />
			</div>
			<div className="xl:col-span-5 col-span-12 grid gap-4 duration-300">
				<TotalAnalytics />
				<TopPlatform />
			</div>
		</section>
	);
};

export default MainDashboardTemplate;
