import React, { ReactNode } from "react";
import Sidebar from "./sidebar";
import classNames from "classnames";

type DashboardLayoutProps = {
	children?: ReactNode;
	className?: string;
};

const DashboardLayout = ({ children, className }: DashboardLayoutProps) => {
	const defaultClasses = "flex hide_scroll_bar";
	return (
		<main className={classNames(defaultClasses, className)}>
			<Sidebar />
			<div className="flex-grow min-h-screen">
				{React.Children.map(children, (child) => {
					if (React.isValidElement(child)) {
						return React.cloneElement<any>(child, {});
					}
					return child;
				})}
			</div>
		</main>
	);
};

export default DashboardLayout;
