"use client";

import { useSidebarContext } from "@/context/sidebar.context";
import React from "react";

const Hamburger = () => {
	const { isOpen, toggle } = useSidebarContext();

	return (
		<div
			onClick={() => {
				toggle();
			}}
			className="xs:hidden">
			Hamburger
		</div>
	);
};

export default Hamburger;
