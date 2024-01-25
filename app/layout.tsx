import type { Metadata } from "next";
import "./globals.css";
import "../lib/constants/font";
import LayoutContainer from "@/components/ui/layout";

export const metadata: Metadata = {
	title: "Dashboard | Geegpay",
	description: "Geegpay Dashboard Design Challenge By Josh",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="dark:bg-dark_bg duration-300">
				<LayoutContainer>{children}</LayoutContainer>
			</body>
		</html>
	);
}
