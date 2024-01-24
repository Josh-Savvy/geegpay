import React, { Fragment, ReactNode } from "react";
import Navbar from "./navbar";
import DashboardLayout from "./DashboardLayout";
import { ThemeProvider } from "@/context/theme.context";
import { SidebarProvider } from "@/context/sidebar.context";
import { NotificationsPanelProvider } from "@/context/notifications-panel.context";
import NotificationsPanel from "./NotificationsPanel";

const LayoutContainer = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider>
			<SidebarProvider>
				<NotificationsPanelProvider>
					<NotificationsPanel />
					<DashboardLayout>
						<Navbar />
						<section className="px-3">{children}</section>
					</DashboardLayout>
				</NotificationsPanelProvider>
			</SidebarProvider>
		</ThemeProvider>
	);
};

export default LayoutContainer;
