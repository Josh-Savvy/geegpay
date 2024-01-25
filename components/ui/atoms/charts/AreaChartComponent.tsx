"use client";
import classNames from "classnames";
import React from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface AreaChartComponentProps<T> {
	data: T[];
}

function AreaChartComponent<T>({ data }: AreaChartComponentProps<T>) {
	const mappedData = [232, 232, 132, 323];
	return (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart width={100} height={100} data={mappedData}>
				<XAxis tickFormatter={(value) => value.slice(0, 3)} dataKey={"month" || "week" || "day"} />
				<YAxis tickFormatter={(value) => (value !== 0 ? value.toFixed(3) : value)} />
				<CartesianGrid strokeDasharray="5" vertical={false} />

				<Bar
					className={classNames(
						"md:dark:hover:opacity-90 md:hover:opacity-90 md:opacity-50 dark:md:opacity-40 duration-300 text-[#34CAA5]",
					)}
					radius={[50, 50, 0, 0]}
					dataKey="total"
					barSize={30}
					// fill="currentColor"
					fill="url(#colorUv)"
					layout="horizontal"
				/>
			</BarChart>
		</ResponsiveContainer>
	);
}

export default AreaChartComponent;
