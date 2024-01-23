import classNames from "classnames";
import React, { HtmlHTMLAttributes, RefObject } from "react";

interface SearchBarProps extends HtmlHTMLAttributes<HTMLInputElement> {
	ref?: RefObject<HTMLInputElement>;
	containerProps?: HtmlHTMLAttributes<HTMLDivElement>;
	containerRef?: RefObject<HTMLDivElement>;
}

const SearchBar = ({ containerProps, containerRef, className, ref, ...rest }: SearchBarProps) => {
	const { className: containerClass, ...container } = containerProps || {};

	const defaultContainerClass = "border";
	const defaulInputClass = "outline-none focus:ring-0";

	return (
		<div ref={containerRef} {...container} className={classNames(defaultContainerClass, containerClass)}>
			<input ref={ref} {...rest} type="text" className={classNames(defaulInputClass, className)} />
		</div>
	);
};

export default SearchBar;
