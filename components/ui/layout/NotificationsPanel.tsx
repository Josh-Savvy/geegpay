"use client";
import { useNotificationPanel } from "@/context/notifications-panel.context";
import classNames from "classnames";
import React from "react";
import NotificationCard from "../atoms/cards/NotificationCard";

type NotificationsPanelProps = {
	closeOnBackdropClick?: boolean;
};

const NotificationsPanel = ({ closeOnBackdropClick }: NotificationsPanelProps) => {
	const { isViewing, toggleNotificationsPanel } = useNotificationPanel();
	return (
		<>
			{isViewing && (
				<div
					onClick={() => {
						if (closeOnBackdropClick) toggleNotificationsPanel("close");
					}}
					className="absolute w-full bg-black/20 backdrop-blur-sm h-full left-0 top-0 z-50"
				/>
			)}
			<div
				className={classNames(
					"fixed z-50 h-screen max-w-xl xl:max-w-md right-0 top-0 duration-300",
					isViewing ? "w-full" : "w-0",
				)}>
				<div className="py-4 md:py-8 flex flex-col bg-white dark:bg-gray-800 w-full h-full p-4 relative z-10 ml-auto duration-300">
					<NotificationsHead />
					<NotificationsBody />
				</div>
			</div>
		</>
	);
};

const NotificationsBody = () => {
	return (
		<div className="overflow-hidden overflow-y-auto grid my-4">
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
		</div>
	);
};

const NotificationsHead = () => {
	const { toggleNotificationsPanel } = useNotificationPanel();

	return (
		<div className="flex items-center justify-between">
			<h1 className="dark:text-[#b2abab]">All Notifications</h1>
			<button
				type="submit"
				onClick={() => {
					toggleNotificationsPanel("close");
				}}
				className="dark:text-[#b2abab] border border-[#b2abab] rounded px-5 p-1">
				&times; Close
			</button>
		</div>
	);
};
export default NotificationsPanel;
