import classNames from "classnames";
import React from "react";

type ProgressProps = {
	value: number;
	overall: number;
	color?: string;
	label?: string;
	className?: string;
	height?: number | string;
	width?: number | string;
};

const Progress = ({ overall, value, color, className, height, label }: ProgressProps) => {
	// console.log({ overall });
	// const percentage = Number(value / overall) * 100;
	return (
		<>
			<div
				className={classNames(
					"bg-zinc-100 relative flex duration-300 items-center rounded-full w-full overflow-hidden",
					height ? `p-[${height}]` : "p-2",
				)}>
				<div className={classNames("absolute left-0 w-20 h-full", className, color ? color : "bg-black")} />
			</div>
			<div className="flex justify-between items-center">
				<p className=""></p>
				{/* <p className="">{percentage}%</p> */}
			</div>
		</>
	);
};

export default Progress;
