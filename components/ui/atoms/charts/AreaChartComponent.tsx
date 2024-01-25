"use client";

import classNames from "classnames";
import React from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const AreaChartComponent = ({ data }: { data: number[] }) => {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<AreaChart
				width={500}
				height={400}
				data={data}
				margin={{
					top: 10,
					right: 30,
					left: 0,
					bottom: 0,
				}}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
			</AreaChart>
		</ResponsiveContainer>
	);
};

export default AreaChartComponent;
