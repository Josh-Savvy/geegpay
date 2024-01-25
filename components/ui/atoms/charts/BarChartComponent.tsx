// "use client";

import monthsArr from "@/data/months";
import classNames from "classnames";
import React from "react";
import { ResponsiveContainer, BarChart, Bar, Tooltip, CartesianGrid, XAxis, YAxis } from "recharts";

const BarChartComponent = ({ data }: { data: number[] }) => {
	const mappedData = data
		.map((val, id) => {
			return { month: monthsArr[id], total: val };
		})
		.slice(0, monthsArr.length);
	return (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart width={100} height={100} data={mappedData}>
				<Tooltip
					animationDuration={100}
					cursor={false}
					position={{ y: -{} + 200, x: -{} + 10 }}
					offset={-50}
					animationEasing="ease-in-out"
					filterNull
					content={<CustomTooltip />}
				/>
				<defs>
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#34CAA5" />
						<stop offset="100%" stopColor="#34CAA53A" />
					</linearGradient>
				</defs>
				<XAxis
					tickLine={false}
					axisLine={false}
					tickFormatter={(value) => value.slice(0, 3)}
					dataKey={"month" || "week" || "day"}
				/>
				<YAxis
					tickLine={false}
					axisLine={false}
					tickFormatter={(value) => (value !== 0 ? value.toFixed(3) : value)}
				/>
				<CartesianGrid strokeDasharray="5" vertical={false} />
				<Bar
					className={classNames(
						"md:dark:hover:opacity-90 md:hover:opacity-90 md:opacity-50 dark:md:opacity-40 duration-300 text-[#34CAA5]",
					)}
					radius={[50, 50, 0, 0]}
					dataKey="total"
					barSize={35}
					// fill="currentColor"
					fill="url(#colorUv)"
					layout="horizontal"
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};

const CustomTooltip = ({ active, payload }: any) => {
	if (active && payload && payload.length) {
		return (
			<div className="dark:bg-[#ffffff] bg-black rounded-lg dark:text-black text-white px-5 p-2 text-[14px] relative flex justify-center items-center font-medium font_inter">
				{payload.map((pld: any, id: number) => (
					<div key={id} className="flex items-center gap-1 relative z-10">
						<div>${pld.value.toFixed(3)}</div>
					</div>
				))}
				<div className="absolute h-[50%] w-[40%] bg-black dark:bg-white rotate-[50deg] bottom-1 left-5" />
			</div>
		);
	}

	return null;
};

export default BarChartComponent;
