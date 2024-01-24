"use client";

import { useSidebarContext } from "@/context/sidebar.context";
import classNames from "classnames";
import React from "react";

const Hamburger = () => {
	const { toggle } = useSidebarContext();

	return (
		<div
			onClick={() => {
				toggle();
			}}
			className="xs:hidden cursor-pointer flex flex-col gap-1">
			{Array.from({ length: 3 }).map((_, id) => (
				<div
					className={classNames("relative h-[2px] px-3.5 bg-black dark:bg-[#b2abab] w-full duration-300")}
					// style={{ left: -(id * 5) + 10 }}
					key={id}
				/>
			))}
		</div>
	);
};

export default Hamburger;
