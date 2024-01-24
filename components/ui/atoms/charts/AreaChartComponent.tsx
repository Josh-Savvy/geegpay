"use client";
import React from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

interface AreaChartComponentProps<T> {
	data: T[];
}

function AreaChartComponent<T>({ data }: AreaChartComponentProps<T>) {
	return (
		<ResponsiveContainer>
			<AreaChart data={data}>
				<Area dataKey="" type="monotone" fill="#d31119" />
			</AreaChart>
		</ResponsiveContainer>
	);
}

export default AreaChartComponent;
