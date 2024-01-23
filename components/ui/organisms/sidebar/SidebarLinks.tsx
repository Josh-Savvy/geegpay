"use client";

import * as DashboardIcons from "@/components/ui/atoms/icons/DashboardIcons";

import sidebarTabs, { TabType } from "@/data/sidebar-links";
import React, { Dispatch, Fragment, SetStateAction, useState } from "react";

const SidebarLinks = () => {
	const [activeTab, setActiveTab] = useState<TabType>(sidebarTabs[0]);

	return (
		<Fragment>
			{sidebarTabs.map((tab, index) => (
				<TabItem {...{ activeTab, setActiveTab, tab }} key={index} />
			))}
		</Fragment>
	);
};

type TabItemProps = { activeTab: TabType; setActiveTab: Dispatch<SetStateAction<TabType>>; tab: TabType };

const TabItem = ({ activeTab, setActiveTab, tab }: TabItemProps) => {
	const IconComp = DashboardIcons[tab.icon];
	return (
		<div className="relative">
			<IconComp />
		</div>
	);
};

export default SidebarLinks;
