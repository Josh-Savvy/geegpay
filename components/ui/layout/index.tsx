import React, { Fragment, ReactNode } from "react";
import Navbar from "./navbar";
import DashboardLayout from "../organisms/DashboardLayout";
import { ThemeProvider } from "@/context/theme.context";

const LayoutContainer = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider>
			<DashboardLayout>
				<Navbar />
				<section className="">{children}</section>
			</DashboardLayout>
		</ThemeProvider>
	);
};

export default LayoutContainer;
