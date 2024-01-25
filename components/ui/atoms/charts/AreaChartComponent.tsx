"use client";

import { noCurve } from "@/no-curve";
import React, { useMemo } from "react";
import { Area, AreaChart, Line, ResponsiveContainer } from "recharts";

const AreaChartComponent = ({ data, color, strokeColor }: { data: number[]; color: string; strokeColor: string }) => {
	const mappedData = data.map((d, i) => {
		return { val: (i + 1).toString(), data: d };
	});
	return (
		<ResponsiveContainer width="100%" height="100%">
			<AreaChart width={100} height={100} data={mappedData}>
				<defs>
					<linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor={color} />
						<stop offset="65%" stopColor={`${color}1A`} />
					</linearGradient>
				</defs>
				<Area type={noCurve} dataKey="data" stroke={strokeColor} strokeWidth={1.2} fill="url(#areaFill)" />
			</AreaChart>
		</ResponsiveContainer>
	);
};

export default AreaChartComponent;
