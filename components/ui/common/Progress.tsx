import classNames from "classnames";
import React, { ReactNode } from "react";

type ProgressProps = {
	value: number;
	percentage: number;
	color?: string;
	label?: string | ReactNode;
	className?: string;
	height?: number | string;
	width?: number | string;
};

const Progress = ({ percentage, value, color, className, height, width }: ProgressProps) => {
	return (
		<>
			<div
				className={classNames(
					"bg-[#F5F5F5] dark:bg-[#333] relative flex duration-300 items-center rounded-full w-full overflow-hidden border-transparent",
				)}
				style={{ padding: height ? height : 6 }}>
				<div
					className={classNames("absolute -left-3 h-full rounded-full w-20", className)}
					style={{
						width: width || 20,
						background: color || "#d31119",
					}}
				/>
			</div>
			{typeof percentage === "number" ? (
				<div className="flex justify-between items-center">
					<p className="text-[#525252] font-normal">{value.toLocaleString()}</p>
					<p className="">{percentage.toFixed(1)}%</p>
				</div>
			) : (
				percentage
			)}
		</>
	);
};

export default Progress;
