"use client";

import * as DashboardIcons from "@/components/ui/atoms/icons/DashboardIcons";
import { useSidebarContext } from "@/context/sidebar.context";
import { useTheme } from "@/context/theme.context";
import sidebarTabs, { TabType } from "@/data/sidebar-links";
import classNames from "classnames";
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
	const is_active = Boolean(activeTab.label === tab.label);
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
						is_active,
					}}
					color={is_active ? (currentTheme === "dark" ? "#fff" : "#0D062D") : "#B2ABAB"}
				/>
			)}
			{/* {is_active && ( */}
			<div
				className={classNames(
					"absolute rounded-tl-lg rounded-bl-lg right-0 bg-tertiary dark:bg-white duration-300",
					is_active ? "h-full translate-y-0 p-[3px] xs:p-[2px]" : "h-0 translate-y-10",
				)}
			/>
			{/* )} */}
			<p
				className={classNames(
					"xs:hidden text-sm whitespace-nowrap duration-300",
					is_active ? "dark:text-white" : "dark:text-[#B2ABAB]",
				)}>
				{tab.label}
			</p>
			<div className="absolute whitespace-nowrap left-16 group-hover:sm:flex hidden border border-tertiary p-2 px-5 text-tertiary bg-white text-sm">
				{tab.label}
			</div>
		</div>
	);
};

export default SidebarLinks;
