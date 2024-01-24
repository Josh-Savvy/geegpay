import React, { Fragment, ReactNode } from "react";
import Navbar from "./navbar";
import DashboardLayout from "./DashboardLayout";
import { ThemeProvider } from "@/context/theme.context";
import { SidebarProvider } from "@/context/sidebar.context";

const LayoutContainer = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider>
			<SidebarProvider>
				<DashboardLayout>
					<Navbar />
					<section className="px-3">{children}</section>
				</DashboardLayout>
			</SidebarProvider>
		</ThemeProvider>
	);
};

export default LayoutContainer;
