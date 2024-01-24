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
		label: "Analytics",
		link: "",
	},
	{
		icon: "UsersIcon",
		label: "Users Management",
		link: "",
	},
	{
		icon: "BoxIcon",
		label: "Donations",
		link: "",
	},
	{
		icon: "DiscountIcon",
		label: "Discounts",
		link: "",
	},
	{
		icon: "InfoIcon",
		label: "Info",
		link: "",
	},
];

export default sidebarTabs;
