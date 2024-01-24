import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { DocumentIcon } from "../atoms/icons";
import { formatDate } from "@/utils";
type IOrder = { user: { avatar?: string; name: string }; amount: number; date: string; status: "paid" | "refund" };

const LatestOrders = () => {
	const latestOrders: IOrder[] = [
		{
			user: { name: "Marcus Bergson", avatar: "/assets/images/avatar_1.png" },
			amount: 80000,
			date: new Date().toDateString(),
			status: "paid",
		},
		{
			user: { name: "Jaydon Vaccaro", avatar: "/assets/images/avatar_2.png" },
			amount: 150000,
			date: new Date().toDateString(),
			status: "refund",
		},
		{
			user: { name: "Corey Schleifer", avatar: "/assets/images/avatar_3.png" },
			amount: 87000,
			date: new Date().toDateString(),
			status: "paid",
		},
		{
			user: { name: "Cooper Press", avatar: "/assets/images/avatar_4.png" },
			amount: 100000,
			date: new Date().toDateString(),
			status: "refund",
		},
		{
			user: { name: "Phillip Lubin", avatar: "/assets/images/avatar_5.png" },
			amount: 78000,
			date: new Date().toDateString(),
			status: "paid",
		},
	];
	return (
		<div className="relative flex flex-col gap-2 w-full rounded-xl bg-white border border-[#EDF2F7] p-5 xl:p-3 duration-300">
			{/* Top Header Section */}
			<div className="mb-5 flex justify-between items-center w-full">
				<h1 className="">Latest Orders</h1>
				<p className="text-[#34CAA5] hover:underline select-none cursor-pointer">See all</p>
			</div>

			<TableHead />
			<div className="grid items-center mt-3">
				{latestOrders.map((order, id) => {
					return <TableItem key={id} {...{ order }} />;
				})}
			</div>
		</div>
	);
};

const TableItem = ({ order }: { order: IOrder }) => {
	return (
		<div className="grid grid-cols-12 gap-2 text-sm items-center py-4 border-t border-[#EDF2F6] cursor-default hover:bg-slate-50 duration-300">
			<div className="col-span-3 flex items-center gap-2">
				<div className="w-8 h-8 overflow-hidden rounded-full bg-zinc-200">
					<Image
						src={String(order.user.avatar)}
						alt="user"
						height={100}
						width={100}
						loading="lazy"
						unoptimized
					/>
				</div>
				<p className="flex items-center gap-1">
					{order.user.name.split(" ")[0]}
					<span className="xl:block lg:hidden md:block hidden">{order.user.name.split(" ")[1]}</span>
				</p>
			</div>
			<div className="col-span-3 text-zinc-300">{formatDate(new Date("11-04-2004"), { shortMonth: true })}</div>
			<div className="col-span-2 text-[#0D062D]">${order.amount.toLocaleString()}</div>
			<div
				className={classNames(
					"col-span-2 capitalize",
					order.status === "paid" ? "text-success" : "text-danger",
				)}>
				{order.status}
			</div>
			<div className="col-span-2 flex gap-2 items-center hover:underline cursor-pointer">
				<DocumentIcon />
				<p className="text-[#0D062D]">View</p>
			</div>
		</div>
	);
};

const TableHead = () => {
	return (
		<div className="grid grid-cols-12 gap-2">
			<div className="col-span-3">Name</div>
			<div className="col-span-3">Date</div>
			<div className="col-span-2">Amount</div>
			<div className="col-span-2">Status</div>
			<div className="col-span-2">Invoice</div>
		</div>
	);
};
export default LatestOrders;
