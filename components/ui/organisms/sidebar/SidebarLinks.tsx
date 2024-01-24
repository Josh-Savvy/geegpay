"use client";

import * as DashboardIcons from "@/components/ui/atoms/icons/DashboardIcons";
import sidebarTabs, { TabType } from "@/data/sidebar-links";
import React, { Dispatch, SetStateAction, useState } from "react";

const SidebarLinks = () => {
	const [activeTab, setActiveTab] = useState<TabType>(sidebarTabs[0]);

	return (
		<div className="flex flex-col items-center gap-8 mt-6 w-full justify-center">
			{sidebarTabs.map((tab, index) => (
				<TabItem {...{ activeTab, setActiveTab, tab }} key={index} />
			))}
		</div>
	);
};

type TabItemProps = { activeTab: TabType; setActiveTab: Dispatch<SetStateAction<TabType>>; tab: TabType };

const TabItem = ({ activeTab, setActiveTab, tab }: TabItemProps) => {
	const IconComp = DashboardIcons[tab.icon];
	return (
		<div
			className="group z-20 relative w-full items-center justify-center flex"
			onClick={() => {
				setActiveTab(tab);
			}}>
			{tab.icon && (
				<IconComp
					{...{
						...tab.iconProps,
						size: 26,
						className: "cursor-pointer duration-300",
						is_active: Boolean(activeTab.label === tab.label),
					}}
					color={Boolean(activeTab.label === tab.label) ? "#0D062D" : "#B2ABAB"}
				/>
			)}
			{Boolean(activeTab.label === tab.label) && (
				<div className="absolute p-[2px] rounded-tl-lg rounded-bl-lg h-full right-0 bg-tertiary" />
			)}
			{/* <div className="absolute left-20 group-hover:flex hidden border-tertiary p-2 px-5 text-tertiary bg-white text-sm">
				{tab.label}
			</div> */}
		</div>
	);
};

export default SidebarLinks;
