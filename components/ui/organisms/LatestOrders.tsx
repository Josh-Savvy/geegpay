import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { DocumentIcon } from "../atoms/icons";
import { formatAmount, formatDate } from "@/utils";
import latestOrders, { type IOrder } from "@/data/latestOrders";

const LatestOrders = () => {
	return (
		<div className="relative flex flex-col gap-2 w-full rounded-xl bg-white dark:bg-[#181818] dark:border-[#B2ABAB] dark:border-opacity-20 border border-[#EDF2F7] p-5 xl:p-3 duration-300">
			{/* Top Header Section */}
			<div className="mb-5 flex justify-between items-center w-full">
				<h1 className="text-[18px] text-[#26282C] dark:text-white duration-300 font-medium">Latest Orders</h1>
				<p className="text-[#34CAA5] hover:underline select-none cursor-pointer">See all</p>
			</div>
			<TableHead />
			<div className="grid items-center mt-3">
				{latestOrders
					.map((order, id) => {
						return <TableItem key={id} {...{ order }} />;
					})
					.slice(0, 5)}
			</div>
		</div>
	);
};

const TableItem = ({ order }: { order: IOrder }) => {
	const date = new Date(order.date || "11-04-2004");
	return (
		<div className="grid grid-cols-12 xl:grid-cols-11 gap-6 md:gap-4 text-sm items-center py-2 border-t border-[#EDF2F6] dark:border-opacity-20 cursor-default hover:bg-slate-50 dark:hover:bg-gray-900 duration-300">
			<div className="col-span-3 flex items-center gap-2">
				<div className="w-8 h-8 overflow-hidden rounded-full hidden xs:flex justify-center items-center">
					<Image
						src={String(order.user.avatar)}
						alt="user"
						height={100}
						width={100}
						loading="lazy"
						unoptimized
						className="bg-zinc-200 rounded-full"
					/>
				</div>
				<p className="flex items-center gap-1 text-[#3A3F51] dark:text-white">
					{order.user.name.split(" ")[0]}
					<span className="sm:block hidden">{order.user.name.split(" ")[1]}</span>
				</p>
			</div>
			<div className="col-span-3 xl:col-span-2 dark:text-[#b2abab] text-[#737373] md:inline-grid hidden">
				{formatDate(date, { shortMonth: true })}
			</div>
			<div className="col-span-3 sm:col-span-2 dark:text-[#b2abab] text-[#737373] md:hidden">
				{new Date(date).toLocaleDateString().split("/").join("-")}
			</div>
			<div className="sm:inline-flex hidden col-span-2 text-[#0D062D] dark:text-white">
				${order.amount.toLocaleString()}
			</div>
			<div className="col-span-3 sm:hidden text-[#0D062D] dark:text-white">${formatAmount(order.amount)}</div>
			<div
				className={classNames(
					"col-span-3 sm:col-span-2 capitalize",
					order.status === "refund"
						? "text-danger"
						: order.status === "pending"
						? "text-warning"
						: "text-success",
				)}>
				{order.status}
			</div>
			<div className="sm:flex hidden col-span-2 gap-2 items-center dark:text-white hover:underline cursor-pointer">
				<DocumentIcon size={18} className="fill-current text-[#292D32] dark:text-[#b2abab]" />
				<p className="text-[#0D062D] dark:text-white">View</p>
			</div>
		</div>
	);
};

const TableHead = () => {
	return (
		<div className="grid grid-cols-12 xl:grid-cols-11 gap-2 text-sm xs:text-[15px] text-[#9CA4AB] font-[300]">
			<div className="col-span-3">Name</div>
			<div className="col-span-3 sm:col-span-2 md:col-span-3 xl:col-span-2">Date</div>
			<div className="col-span-3 sm:col-span-2">Amount</div>
			<div className="col-span-2">Status</div>
			<div className="col-span-2 sm:inline-grid hidden">Invoice</div>
		</div>
	);
};
export default LatestOrders;
