import classNames from "classnames";
import React, { HTMLInputTypeAttribute, HtmlHTMLAttributes, ReactNode, RefObject } from "react";
import { SearchIcon } from "../icons";
interface SearchBarProps extends HtmlHTMLAttributes<HTMLInputElement> {
	ref?: RefObject<HTMLInputElement>;
	containerProps?: HtmlHTMLAttributes<HTMLDivElement>;
	containerRef?: RefObject<HTMLDivElement>;
	type?: HTMLInputTypeAttribute;
	rightIcon?: ReactNode;
	placeholder?: string;
}

const SearchBar = ({ type, containerProps, containerRef, className, ref, placeholder, ...rest }: SearchBarProps) => {
	const { className: containerClass, ...container } = containerProps || {};

	const defaultContainerClass = `duration-300 border border-[#DADDDD] bg-white rounded-full p-2.5 px-4 flex items-center`;
	const defaulInputClass =
		"px-3 outline-none focus:ring-0 bg-transparent flex-grow font_inter font-normal placeholder:text-sm";

	return (
		<div ref={containerRef} {...container} className={classNames(defaultContainerClass, containerClass)}>
			{type == "search" ? <SearchIcon className="fill-current text-black dark:text-[#b2abab]" /> : <></>}
			<input
				placeholder={placeholder}
				type={type}
				ref={ref}
				{...rest}
				className={classNames(defaulInputClass, className)}
			/>
		</div>
	);
};

export default SearchBar;
