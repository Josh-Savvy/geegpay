"use client";

import * as DashboardIcons from "@/components/ui/atoms/icons/DashboardIcons";
import { useSidebarContext } from "@/context/sidebar.context";
import { useTheme } from "@/context/theme.context";
import sidebarTabs, { TabType } from "@/data/sidebar-links";
import React, { Dispatch, SetStateAction, useState } from "react";

const SidebarLinks = () => {
	const [activeTab, setActiveTab] = useState<TabType>(sidebarTabs[0]);
	const { toggle } = useSidebarContext();

	return (
		<div className="flex flex-col items-center gap-8 mt-16 xs:mt-6 w-full justify-center">
			{sidebarTabs.map((tab, index) => (
				<TabItem {...{ activeTab, setActiveTab, tab }} key={index} />
			))}
		</div>
	);
};

type TabItemProps = { activeTab: TabType; setActiveTab: Dispatch<SetStateAction<TabType>>; tab: TabType };

const TabItem = ({ activeTab, setActiveTab, tab }: TabItemProps) => {
	const IconComp = DashboardIcons[tab.icon];
	const { currentTheme } = useTheme();
	const { toggle } = useSidebarContext();
	return (
		<div
			className="group z-50 relative w-full items-center xs:justify-center flex gap-5 xs:gap-0 cursor-pointer select-none"
			onClick={() => {
				setActiveTab(tab);
				toggle("close");
			}}>
			{tab.icon && (
				<IconComp
					{...{
						...tab.iconProps,
						size: 26,
						className: "cursor-pointer duration-300",
						is_active: Boolean(activeTab.label === tab.label),
					}}
					color={
						Boolean(activeTab.label === tab.label)
							? currentTheme === "dark"
								? "#fff"
								: "#0D062D"
							: "#B2ABAB"
					}
				/>
			)}
			{Boolean(activeTab.label === tab.label) && (
				<div className="absolute p-[3px] xs:p-[2px] rounded-tl-lg rounded-bl-lg h-full right-0 bg-tertiary" />
			)}
			<p className="xs:hidden text-sm">{tab.label}</p>
			<div className="absolute whitespace-nowrap left-16 group-hover:sm:flex hidden border border-tertiary p-2 px-5 text-tertiary bg-white text-sm">
				{tab.label}
			</div>
		</div>
	);
};

export default SidebarLinks;
