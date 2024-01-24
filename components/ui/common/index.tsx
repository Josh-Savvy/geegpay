"use client";
import { useNotificationPanel } from "@/context/notifications-panel.context";
import React from "react";
import { BellIcon } from "../atoms/icons";

const NotificationBell = () => {
	const { isViewing, toggleNotificationsPanel } = useNotificationPanel();

	return (
		<div
			onClick={() => {
				toggleNotificationsPanel("open");
			}}
			className="border-[#DADDDD] dark:border-[#B2ABAB] hover:border-black/30 border rounded-full hover:bg-[#DADDDD]/30 p-3 flex justify-center items-center duration-300 cursor-pointer">
			<BellIcon />
		</div>
	);
};

export default NotificationBell;
