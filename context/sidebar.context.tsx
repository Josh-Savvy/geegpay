"use client";
import React from "react";

type ISidebarContext = {
	isOpen: boolean;
	toggle: (args?: "close" | "open") => void;
};

const SidebarContext = React.createContext<ISidebarContext>({ isOpen: false, toggle: () => {} });

export const SidebarProvider=()=>{};
