"use client";
import { useNotificationPanel } from "@/context/notifications-panel.context";
import classNames from "classnames";
import React from "react";

type NotificationsPanelProps = {
	closeOnBackdropClick: boolean;
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
					className="absolute w-full bg-black/20 backdrop-blur-md h-full left-0 top-0 z-50"
				/>
			)}
			<div
				className={classNames(
					"fixed z-50 h-screen right-0 top-0 overflow-hidden duration-300",
					isViewing ? "w-full" : "w-0",
				)}>
				<div className="flex flex-col max-w-xl xl:max-w-md bg-white w-full h-full p-4 relative z-10 ml-auto duration-300">
					<div className="flex items-center justify-between">
						<h1 className="">All Notifications</h1>
						<button
							type="submit"
							onClick={() => {
								toggleNotificationsPanel("close");
							}}
							className="">
							&times; Close
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default NotificationsPanel;
