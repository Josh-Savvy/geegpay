"use client";
import { useNotificationPanel } from "@/context/notifications-panel.context";
import React from "react";
import { BellIcon } from "../atoms/icons";

const NotificationBell = () => {
	const { toggleNotificationsPanel } = useNotificationPanel();
	return (
		<div
			onClick={() => {
				toggleNotificationsPanel("open");
			}}
			className="border-[#DADDDD] dark:border-[#B2ABAB] dark:border-opacity-50 hover:border-black/30 border rounded-full hover:bg-[#DADDDD]/30 p-3 flex justify-center items-center duration-300 cursor-pointer">
			<BellIcon className="fill-current text-[#0D062D] dark:text-[#b2abab] duration-300" />
		</div>
	);
};

export default NotificationBell;
