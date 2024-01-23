"use client";

import * as DashboardIcons from "@/components/ui/atoms/icons/DashboardIcons";
import sidebarTabs, { TabType } from "@/data/sidebar-links";
import React, { Dispatch, SetStateAction, useState } from "react";

const SidebarLinks = () => {
	const [activeTab, setActiveTab] = useState<TabType>(sidebarTabs[0]);

	return (
		<div className="grid gap-6 mt-6">
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
		<div className="relative">
			{tab.icon ? (
				<IconComp
					{...{ ...tab.iconProps, is_active: Boolean(activeTab.label === tab.label), size: 20 }}
					color={Boolean(activeTab.label === tab.label) ? "#3A3F51" : "#B2ABAB"}
				/>
			) : (
				<></>
			)}
			<div className=""></div>
		</div>
	);
};

export default SidebarLinks;
