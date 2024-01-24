"use client";

import { ReactNode, createContext, useContext, useState } from "react";

type INotificationPanel = {
	isViewing: boolean;
	toggleNotificationsPanel: (arg?: "open" | "close") => void;
};

const NotificationPanel = createContext<INotificationPanel>({
	isViewing: false,
	toggleNotificationsPanel() {},
});

export const NotificationsPanelProvider = ({ children }: { children?: ReactNode }) => {
	const [isViewing, setIsViewing] = useState<boolean>(false);
	const toggleNotificationsPanel = (arg?: "open" | "close") => {
		if (arg) setIsViewing((p) => (arg === "open" ? true : arg === "close" ? false : !p));
		else {
			setIsViewing((p) => !p);
		}
	};

	return (
		<NotificationPanel.Provider value={{ isViewing, toggleNotificationsPanel }}>
			{children}
		</NotificationPanel.Provider>
	);
};
export const useNotificationPanel = () => useContext(NotificationPanel);
