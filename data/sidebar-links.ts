import * as DashboardIcons from "@/components/ui/atoms/icons/DashboardIcons";

export type TabType = { label: string; link: string; icon: keyof typeof DashboardIcons; iconProps?: {} };

const sidebarTabs: TabType[] = [
	{
		icon: "MenuIcon",
		label: "Menu",
		link: "",
	},
	{
		icon: "TrendIcon",
		label: "Menu",
		link: "",
	},
	{
		icon: "UsersIcon",
		label: "Menu",
		link: "",
	},
	{
		icon: "BoxIcon",
		label: "Menu",
		link: "",
	},
	{
		icon: "DiscountIcon",
		label: "Menu",
		link: "",
	},
	{
		icon: "InfoIcon",
		label: "Menu",
		link: "",
	},
];

export default sidebarTabs;
