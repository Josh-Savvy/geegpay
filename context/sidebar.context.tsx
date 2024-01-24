"use client";
import React, { ReactNode, useContext, useState } from "react";

type ISidebarContext = {
	isOpen: boolean;
	toggle: (args?: "close" | "open") => void;
};

const SidebarContext = React.createContext<ISidebarContext>({ isOpen: false, toggle: () => {} });

export const SidebarProvider = ({ children }: { children?: ReactNode }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const toggle = (args?: "close" | "open") => {
		if (args) args === "open" ? setIsOpen(true) : args === "close" ? setIsOpen(false) : setIsOpen((p) => !p);
		else {
			setIsOpen((p) => !p);
		}
	};
	return <SidebarContext.Provider value={{ isOpen, toggle }}>{children}</SidebarContext.Provider>;
};

export const useSidebarContext = () => {
	return useContext(SidebarContext);
};
