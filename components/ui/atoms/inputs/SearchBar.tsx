import classNames from "classnames";
import React, { HTMLInputTypeAttribute, HtmlHTMLAttributes, ReactNode, RefObject } from "react";
import { SearchIcon } from "../icons";

interface SearchBarProps extends HtmlHTMLAttributes<HTMLInputElement> {
	ref?: RefObject<HTMLInputElement>;
	containerProps?: HtmlHTMLAttributes<HTMLDivElement>;
	containerRef?: RefObject<HTMLDivElement>;
	type?: HTMLInputTypeAttribute;
	rightIcon?: ReactNode;
}

const SearchBar = ({ type, containerProps, containerRef, className, ref, ...rest }: SearchBarProps) => {
	const { className: containerClass, ...container } = containerProps || {};

	const defaultContainerClass = `border border-[#DADDDD] bg-white rounded-full p-2.5 px-4 flex items-center`;
	const defaulInputClass = "px-3 outline-none focus:ring-0 bg-transparent flex-grow";

	return (
		<div ref={containerRef} {...container} className={classNames(defaultContainerClass, containerClass)}>
			{type == "search" ? <SearchIcon /> : <></>}
			<input type={type} ref={ref} {...rest} className={classNames(defaulInputClass, className)} />
		</div>
	);
};

export default SearchBar;
