"use client";

import classNames from "classnames";
import React, { useMemo, useRef, useState } from "react";
import { ResponsiveContainer, BarChart, Bar, Tooltip, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
	{
		month: "Page A",
		total: 4000,
	},
	{
		month: "Page B",
		total: 3500,
	},
	{
		month: "Page C",
		total: 2000,
	},
	{
		month: "Page D",
		total: 2780,
	},
	{
		month: "Page E",
		total: 1890,
	},
	{
		month: "Page F",
		total: 2390,
	},
	{
		month: "Page G",
		total: 3490,
	},
];

const BarChartComponent = () => {
	const [activeBarIndex, setActiveBarIndex] = useState<any>({});
	const active: object = useMemo(() => {
		return {};
	}, [activeBarIndex]);

	return (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart
				width={100}
				height={100}
				data={data}
				onMouseMove={(e) => {
					setActiveBarIndex(e.activeTooltipIndex);
				}}>
				<Tooltip
					animationDuration={100}
					cursor={false}
					position={{ y: -active + 200, x: -active + 8 }}
					offset={-50}
					allowEscapeViewBox={{ x: true, y: true }}
					animationEasing="ease-in-out"
					filterNull
					content={<CustomTooltip />}
				/>
				<XAxis dataKey="month" />
				<YAxis />
				<defs>
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#34CAA5" />
						<stop offset="100%" stopColor="#34CAA53A" />
					</linearGradient>
				</defs>
				<CartesianGrid strokeDasharray="5" vertical={false} />
				<Tooltip
					animationDuration={200}
					cursor={{ fill: "transparent" }}
					animationEasing="ease-in-out"
					filterNull
					content={<CustomTooltip />}
				/>
				<Bar
					className={classNames("hover:opacity-90 opacity-40 duration-300")}
					radius={[50, 50, 0, 0]}
					dataKey="total"
					barSize={30}
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
			<div className="dark:bg-[#ffffff] bg-black rounded-lg dark:text-black text-white px-5 p-2 text-[14px] relative flex justify-center items-center">
				{payload.map((pld: any, id: number) => (
					<div key={id} className="flex items-center gap-1 relative z-10">
						<div>${pld.value}</div>
					</div>
				))}
				<div className="absolute h-[50%] w-[40%] bg-black dark:bg-white rotate-[50deg] bottom-1 left-5" />
			</div>
		);
	}

	return null;
};

export default BarChartComponent;
