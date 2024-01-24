import { ForwardRefComponent, SVGMotionProps } from "framer-motion";
import { HtmlHTMLAttributes } from "react";

export interface IconProps extends HtmlHTMLAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	height?: string | number;
	width?: string | number;
	is_active?: boolean;
}

export const AppLogo = ({ size, color, ...rest }: IconProps) => {
	return (
		<svg {...rest} width={size || "40"} height={size || "40"} viewBox="0 0 40 40" fill="none">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95429 0 0 8.95431 0 20C0 31.0457 8.95429 40 20 40ZM26.2393 9.31684C26.543 8.23805 25.4961 7.60013 24.54 8.2813L11.1931 17.7896C10.1562 18.5283 10.3193 20 11.4381 20H14.9527V19.9728H21.8025L16.2212 21.9421L13.7607 30.6832C13.457 31.762 14.5038 32.3999 15.46 31.7187L28.8069 22.2105C29.8438 21.4718 29.6806 20 28.5619 20H23.2321L26.2393 9.31684Z"
				fill={color || "#34CAA5"}
			/>
		</svg>
	);
};

export const Sun = ({ size, color, ...rest }: IconProps) => {
	return (
		<svg {...rest} width={size || "18"} height={size || "18"} viewBox="0 0 18 18" fill="none">
			<g clipPath="url(#clip0_1826_464)">
				<path
					d="M9 13.2188C11.33 13.2188 13.2188 11.33 13.2188 9C13.2188 6.67005 11.33 4.78125 9 4.78125C6.67005 4.78125 4.78125 6.67005 4.78125 9C4.78125 11.33 6.67005 13.2188 9 13.2188Z"
					fill={color || "white"}
				/>
				<path
					d="M9 3.09345C8.53363 3.09345 8.15625 2.71564 8.15625 2.2497V1.40625C8.15625 0.940309 8.53363 0.5625 9 0.5625C9.46637 0.5625 9.84375 0.940309 9.84375 1.40625V2.2497C9.84375 2.71564 9.46637 3.09345 9 3.09345Z"
					fill={color || "white"}
				/>
				<path
					d="M13.7734 5.07056C13.5576 5.07056 13.3417 4.98816 13.1769 4.82336C12.8473 4.49387 12.8473 3.95964 13.1769 3.63015L13.7734 3.03369C14.103 2.7043 14.637 2.7042 14.9666 3.03379C15.2961 3.36328 15.2961 3.89751 14.9666 4.227L14.37 4.82346C14.2052 4.98816 13.9893 5.07056 13.7734 5.07056Z"
					fill={color || "white"}
				/>
				<path
					d="M16.5937 9.84375H15.75C15.2836 9.84375 14.9062 9.46594 14.9062 9C14.9062 8.53406 15.2836 8.15625 15.75 8.15625H16.5937C17.0601 8.15625 17.4375 8.53406 17.4375 9C17.4375 9.46594 17.0601 9.84375 16.5937 9.84375Z"
					fill={color || "white"}
				/>
				<path
					d="M14.37 15.2133C14.1541 15.2133 13.9382 15.131 13.7734 14.9662L13.1769 14.3698C12.8473 14.0403 12.8473 13.5061 13.1769 13.1766C13.5065 12.847 14.0404 12.8469 14.37 13.1765L14.9666 13.7729C15.2961 14.1024 15.2961 14.6366 14.9666 14.9661C14.8018 15.1309 14.5859 15.2133 14.37 15.2133Z"
					fill={color || "white"}
				/>
				<path
					d="M9 17.4374C8.53363 17.4374 8.15625 17.0596 8.15625 16.5937V15.7502C8.15625 15.2843 8.53363 14.9065 9 14.9065C9.46637 14.9065 9.84375 15.2843 9.84375 15.7502V16.5937C9.84375 17.0596 9.46637 17.4374 9 17.4374Z"
					fill={color || "white"}
				/>
				<path
					d="M3.63037 15.2134C3.41449 15.2134 3.19861 15.131 3.03381 14.9662C2.70422 14.6367 2.70422 14.1025 3.03381 13.773L3.63037 13.1765C3.95996 12.8471 4.4939 12.847 4.82349 13.1766C5.15308 13.5061 5.15308 14.0403 4.82349 14.3698L4.22693 14.9663C4.06213 15.131 3.84625 15.2134 3.63037 15.2134Z"
					fill={color || "white"}
				/>
				<path
					d="M2.25 9.84375H1.40625C0.93988 9.84375 0.5625 9.46594 0.5625 9C0.5625 8.53406 0.93988 8.15625 1.40625 8.15625H2.25C2.71637 8.15625 3.09375 8.53406 3.09375 9C3.09375 9.46594 2.71637 9.84375 2.25 9.84375Z"
					fill={color || "white"}
				/>
				<path
					d="M4.22693 5.07063C4.01105 5.07063 3.79517 4.98833 3.63037 4.82354L3.03381 4.22708C2.70422 3.89759 2.70422 3.36335 3.03381 3.03386C3.3634 2.70427 3.89734 2.70417 4.22693 3.03376L4.82349 3.63022C5.15308 3.95971 5.15308 4.49395 4.82349 4.82344C4.65869 4.98823 4.44281 5.07063 4.22693 5.07063Z"
					fill={color || "white"}
				/>
			</g>
			<defs>
				<clipPath id="clip0_1826_464">
					<rect width="16.875" height="16.875" fill={color || "white"} transform="translate(0.5625 0.5625)" />
				</clipPath>
			</defs>
		</svg>
	);
};
export const Moon = ({ size, color, ...rest }: IconProps) => {
	return (
		<svg {...rest} width={size || "30"} height={size || "30"} viewBox="0 0 30 30" fill="none">
			<path
				d="M15 4.6875C15.2486 4.6875 15.4871 4.58873 15.6629 4.41291C15.8387 4.2371 15.9375 3.99864 15.9375 3.75V2.8125C15.9375 2.56386 15.8387 2.3254 15.6629 2.14959C15.4871 1.97377 15.2486 1.875 15 1.875C14.7514 1.875 14.5129 1.97377 14.3371 2.14959C14.1613 2.3254 14.0625 2.56386 14.0625 2.8125V3.75C14.0625 3.99864 14.1613 4.2371 14.3371 4.41291C14.5129 4.58873 14.7514 4.6875 15 4.6875Z"
				fill={color || "#B2ABAB"}
			/>
			<path
				d="M15 25.3125C14.7514 25.3125 14.5129 25.4113 14.3371 25.5871C14.1613 25.7629 14.0625 26.0014 14.0625 26.25V27.1875C14.0625 27.4361 14.1613 27.6746 14.3371 27.8504C14.5129 28.0262 14.7514 28.125 15 28.125C15.2486 28.125 15.4871 28.0262 15.6629 27.8504C15.8387 27.6746 15.9375 27.4361 15.9375 27.1875V26.25C15.9375 26.0014 15.8387 25.7629 15.6629 25.5871C15.4871 25.4113 15.2486 25.3125 15 25.3125Z"
				fill={color || "#B2ABAB"}
			/>
			<path
				d="M27.1875 14.0625H26.25C26.0014 14.0625 25.7629 14.1613 25.5871 14.3371C25.4113 14.5129 25.3125 14.7514 25.3125 15C25.3125 15.2486 25.4113 15.4871 25.5871 15.6629C25.7629 15.8387 26.0014 15.9375 26.25 15.9375H27.1875C27.4361 15.9375 27.6746 15.8387 27.8504 15.6629C28.0262 15.4871 28.125 15.2486 28.125 15C28.125 14.7514 28.0262 14.5129 27.8504 14.3371C27.6746 14.1613 27.4361 14.0625 27.1875 14.0625Z"
				fill={color || "#B2ABAB"}
			/>
			<path
				d="M3.75 14.0625H2.8125C2.56386 14.0625 2.3254 14.1613 2.14959 14.3371C1.97377 14.5129 1.875 14.7514 1.875 15C1.875 15.2486 1.97377 15.4871 2.14959 15.6629C2.3254 15.8387 2.56386 15.9375 2.8125 15.9375H3.75C3.99864 15.9375 4.2371 15.8387 4.41291 15.6629C4.58873 15.4871 4.6875 15.2486 4.6875 15C4.6875 14.7514 4.58873 14.5129 4.41291 14.3371C4.2371 14.1613 3.99864 14.0625 3.75 14.0625Z"
				fill={color || "#B2ABAB"}
			/>
			<path
				d="M22.9549 5.71883L22.2921 6.38164C22.2025 6.46813 22.1311 6.57157 22.082 6.68595C22.0328 6.80033 22.007 6.92335 22.0059 7.04783C22.0048 7.17231 22.0285 7.29576 22.0757 7.41098C22.1228 7.52619 22.1924 7.63087 22.2804 7.71889C22.3685 7.80691 22.4731 7.87653 22.5884 7.92366C22.7036 7.9708 22.827 7.99452 22.9515 7.99344C23.076 7.99236 23.199 7.9665 23.3134 7.91736C23.4278 7.86823 23.5312 7.79681 23.6177 7.70727L24.2814 7.04539C24.3685 6.95829 24.4376 6.85488 24.4848 6.74108C24.5319 6.62727 24.5562 6.5053 24.5562 6.38211C24.5562 6.25893 24.5319 6.13695 24.4848 6.02315C24.4376 5.90934 24.3685 5.80594 24.2814 5.71883C24.1943 5.63173 24.0909 5.56263 23.9771 5.51549C23.8633 5.46835 23.7413 5.44409 23.6182 5.44409C23.495 5.44409 23.373 5.46835 23.2592 5.51549C23.1454 5.56263 23.042 5.63173 22.9549 5.71883Z"
				fill={color || "#B2ABAB"}
			/>
			<path
				d="M6.38185 22.292L5.7181 22.9548C5.631 23.0419 5.5619 23.1453 5.51476 23.2591C5.46762 23.3729 5.44336 23.4949 5.44336 23.6181C5.44336 23.7413 5.46762 23.8632 5.51476 23.977C5.5619 24.0909 5.631 24.1943 5.7181 24.2814C5.89401 24.4573 6.1326 24.5561 6.38138 24.5561C6.50456 24.5561 6.62654 24.5318 6.74035 24.4847C6.85415 24.4376 6.95756 24.3685 7.04466 24.2814L7.70747 23.6185C7.79458 23.5315 7.86368 23.4282 7.91085 23.3144C7.95801 23.2007 7.98231 23.0787 7.98235 22.9556C7.9824 22.8325 7.95819 22.7105 7.9111 22.5967C7.86402 22.483 7.79499 22.3796 7.70794 22.2925C7.6209 22.2054 7.51756 22.1362 7.40381 22.0891C7.29006 22.0419 7.16813 22.0176 7.04499 22.0176C6.7963 22.0175 6.55776 22.1162 6.38185 22.292Z"
				fill={color || "#B2ABAB"}
			/>
			<path
				d="M23.6171 22.292C23.4403 22.1212 23.2035 22.0267 22.9577 22.0288C22.7119 22.031 22.4767 22.1296 22.3029 22.3034C22.1291 22.4772 22.0305 22.7124 22.0284 22.9582C22.0262 23.204 22.1207 23.4408 22.2915 23.6176L22.9543 24.2814C23.1302 24.4573 23.3688 24.5561 23.6176 24.5561C23.8664 24.5561 24.1049 24.4573 24.2809 24.2814C24.4568 24.1054 24.5556 23.8668 24.5556 23.6181C24.5556 23.3693 24.4568 23.1307 24.2809 22.9548L23.6171 22.292Z"
				fill={color || "#B2ABAB"}
			/>
			<path
				d="M6.38185 7.70821C6.55866 7.87898 6.79548 7.97347 7.04129 7.97134C7.2871 7.9692 7.52223 7.87061 7.69605 7.69679C7.86987 7.52297 7.96847 7.28783 7.97061 7.04202C7.97274 6.79621 7.87825 6.5594 7.70747 6.38258L7.04466 5.71883C6.86875 5.54292 6.63016 5.44409 6.38138 5.44409C6.1326 5.44409 5.89401 5.54292 5.7181 5.71883C5.54219 5.89474 5.44336 6.13333 5.44336 6.38211C5.44336 6.63089 5.54219 6.86948 5.7181 7.04539L6.38185 7.70821Z"
				fill={color || "#B2ABAB"}
			/>
			<path
				d="M23.1567 16.3903C23.0357 16.271 22.8846 16.1867 22.7195 16.1466C22.5543 16.1065 22.3814 16.112 22.2192 16.1625C21.5901 16.3568 20.9351 16.4542 20.2767 16.4513C18.4926 16.4495 16.7821 15.7401 15.5205 14.4787C14.2589 13.2173 13.5493 11.5069 13.5473 9.72285C13.545 9.06465 13.643 8.40995 13.8379 7.78128C13.8888 7.61887 13.8945 7.44566 13.8544 7.28025C13.8144 7.11483 13.73 6.96344 13.6104 6.84232C13.4909 6.7212 13.3406 6.63492 13.1757 6.59273C13.0108 6.55055 12.8375 6.55404 12.6745 6.60285C11.2513 7.03321 9.96401 7.82507 8.9381 8.9012C7.91218 9.97733 7.18269 11.301 6.82077 12.7431C6.45885 14.1851 6.47687 15.6964 6.87306 17.1294C7.26925 18.5624 8.03008 19.8683 9.08136 20.9197C10.1326 21.9711 11.4385 22.732 12.8715 23.1283C14.3045 23.5247 15.8157 23.5428 17.2578 23.181C18.6999 22.8192 20.0236 22.0898 21.0999 21.064C22.1761 20.0382 22.9681 18.751 23.3985 17.3278C23.4473 17.1644 23.4506 16.9907 23.408 16.8255C23.3654 16.6603 23.2785 16.5098 23.1567 16.3903Z"
				fill={color || "#B2ABAB"}
			/>
		</svg>
	);
};

export const CircledArrowRight = ({ size, color, ...rest }: IconProps) => {
	return (
		<svg {...rest} width={size || "24"} height={size || "24"} viewBox="0 0 24 24" fill="none">
			<path
				d="M8.5 12H14.5"
				stroke={color || "#B2ABAB"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.5 15L15.5 12L12.5 9"
				stroke={color || "#B2ABAB"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
				stroke={color || "#B2ABAB"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const GearIcon = ({ size, color, ...rest }: IconProps) => {
	return (
		<svg {...rest} width={size || "24"} height={size || "24"} viewBox="0 0 24 24" fill="none">
			<path
				d="M15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C12.41 15 12.81 14.92 13.17 14.76"
				stroke={color || "#B2ABAB"}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.87988 20.5799L7.96988 21.2099C8.75988 21.6799 9.77988 21.3999 10.2499 20.6099L10.3599 20.4199C11.2599 18.8499 12.7399 18.8499 13.6499 20.4199L13.7599 20.6099C14.2299 21.3999 15.2499 21.6799 16.0399 21.2099L17.7699 20.2199C18.6799 19.6999 18.9899 18.5299 18.4699 17.6299C17.5599 16.0599 18.2999 14.7799 20.1099 14.7799C21.1499 14.7799 22.0099 13.9299 22.0099 12.8799V11.1199C22.0099 10.0799 21.1599 9.21995 20.1099 9.21995C19.0999 9.21995 18.4199 8.81995 18.1799 8.18995C17.9899 7.69995 18.0699 7.05995 18.4699 6.36995C18.9899 5.45995 18.6799 4.29995 17.7699 3.77995L16.9599 3.31995"
				stroke={color || "#B2ABAB"}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.64 3.58006C12.74 5.15006 11.26 5.15006 10.35 3.58006L10.24 3.39006C9.78 2.60006 8.76 2.32006 7.97 2.79006L6.24 3.78006C5.33 4.30006 5.02 5.47006 5.54 6.38006C6.45 7.94006 5.71 9.22006 3.9 9.22006C2.86 9.22006 2 10.0701 2 11.1201V12.8801C2 13.9201 2.85 14.7801 3.9 14.7801C5.71 14.7801 6.45 16.0601 5.54 17.6301"
				stroke={color || "#B2ABAB"}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const LogOutIcon = ({ size, color, ...rest }: IconProps) => {
	return (
		<svg {...rest} width={size || "24"} height={size || "24"} viewBox="0 0 24 24" fill="none">
			<path
				d="M6.56 14.5599L4 11.9999L6.56 9.43994"
				stroke={color || "#B2ABAB"}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.23982 12H4.06982"
				stroke={color || "#B2ABAB"}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.2398 12H12.2798"
				stroke={color || "#B2ABAB"}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18.01 6.47998C19.25 7.83998 20 9.70998 20 12C20 17 16.42 20 12 20"
				stroke={color || "#B2ABAB"}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 4C13.05 4 14.05 4.17 14.97 4.49"
				stroke={color || "#B2ABAB"}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const SearchIcon = ({ size, color, ...rest }: IconProps) => {
	return (
		<svg {...rest} width={size || "16"} height={size || "16"} viewBox="0 0 16 16" fill="none">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.68945 0C11.9293 0 15.3781 3.3727 15.3781 7.51907C15.3781 9.47532 14.6104 11.2595 13.3542 12.5986L15.8261 15.0109C16.0574 15.2371 16.0582 15.6031 15.8269 15.8294C15.7116 15.9436 15.5592 16 15.4076 16C15.2568 16 15.1052 15.9436 14.9892 15.8309L12.4874 13.3912C11.1714 14.4219 9.5028 15.0389 7.68945 15.0389C3.44955 15.0389 0 11.6655 0 7.51907C0 3.3727 3.44955 0 7.68945 0ZM7.68945 1.15821C4.10251 1.15821 1.18433 4.01125 1.18433 7.51907C1.18433 11.0269 4.10251 13.8807 7.68945 13.8807C11.2756 13.8807 14.1938 11.0269 14.1938 7.51907C14.1938 4.01125 11.2756 1.15821 7.68945 1.15821Z"
				fill={color || "#78828A"}
			/>
		</svg>
	);
};

export const CalendarIcon = ({ size, color, ...rest }: IconProps) => {
	return (
		<svg {...rest} width={size || "18"} height={size || "18"} viewBox="0 0 18 18" fill="none">
			<path
				d="M1 8.79483C1 5.70067 1 4.15318 1.9376 3.19236C2.8744 2.23071 4.3832 2.23071 7.4 2.23071H10.6C13.6168 2.23071 15.1256 2.23071 16.0624 3.19236C17 4.15318 17 5.70067 17 8.79483V10.4359C17 13.53 17 15.0775 16.0624 16.0383C15.1256 17 13.6168 17 10.6 17H7.4C4.3832 17 2.8744 17 1.9376 16.0383C1 15.0775 1 13.53 1 10.4359V8.79483Z"
				stroke={color || "black"}
				strokeWidth="1.37144"
			/>
			<path
				d="M4.9999 2.23077V1M12.9999 2.23077V1M1.3999 6.33334H16.5999"
				stroke={color || "black"}
				strokeWidth="1.37144"
				strokeLinecap="round"
			/>
			<path
				d="M13.8002 12.8974C13.8002 13.115 13.7159 13.3237 13.5659 13.4776C13.4159 13.6314 13.2124 13.7179 13.0002 13.7179C12.788 13.7179 12.5845 13.6314 12.4345 13.4776C12.2845 13.3237 12.2002 13.115 12.2002 12.8974C12.2002 12.6798 12.2845 12.4711 12.4345 12.3172C12.5845 12.1633 12.788 12.0769 13.0002 12.0769C13.2124 12.0769 13.4159 12.1633 13.5659 12.3172C13.7159 12.4711 13.8002 12.6798 13.8002 12.8974ZM13.8002 9.61531C13.8002 9.83293 13.7159 10.0416 13.5659 10.1955C13.4159 10.3494 13.2124 10.4358 13.0002 10.4358C12.788 10.4358 12.5845 10.3494 12.4345 10.1955C12.2845 10.0416 12.2002 9.83293 12.2002 9.61531C12.2002 9.3977 12.2845 9.189 12.4345 9.03512C12.5845 8.88125 12.788 8.7948 13.0002 8.7948C13.2124 8.7948 13.4159 8.88125 13.5659 9.03512C13.7159 9.189 13.8002 9.3977 13.8002 9.61531ZM9.8002 12.8974C9.8002 13.115 9.71591 13.3237 9.56588 13.4776C9.41585 13.6314 9.21237 13.7179 9.0002 13.7179C8.78802 13.7179 8.58454 13.6314 8.43451 13.4776C8.28448 13.3237 8.2002 13.115 8.2002 12.8974C8.2002 12.6798 8.28448 12.4711 8.43451 12.3172C8.58454 12.1633 8.78802 12.0769 9.0002 12.0769C9.21237 12.0769 9.41585 12.1633 9.56588 12.3172C9.71591 12.4711 9.8002 12.6798 9.8002 12.8974ZM9.8002 9.61531C9.8002 9.83293 9.71591 10.0416 9.56588 10.1955C9.41585 10.3494 9.21237 10.4358 9.0002 10.4358C8.78802 10.4358 8.58454 10.3494 8.43451 10.1955C8.28448 10.0416 8.2002 9.83293 8.2002 9.61531C8.2002 9.3977 8.28448 9.189 8.43451 9.03512C8.58454 8.88125 8.78802 8.7948 9.0002 8.7948C9.21237 8.7948 9.41585 8.88125 9.56588 9.03512C9.71591 9.189 9.8002 9.3977 9.8002 9.61531ZM5.8002 12.8974C5.8002 13.115 5.71591 13.3237 5.56588 13.4776C5.41585 13.6314 5.21237 13.7179 5.0002 13.7179C4.78802 13.7179 4.58454 13.6314 4.43451 13.4776C4.28448 13.3237 4.2002 13.115 4.2002 12.8974C4.2002 12.6798 4.28448 12.4711 4.43451 12.3172C4.58454 12.1633 4.78802 12.0769 5.0002 12.0769C5.21237 12.0769 5.41585 12.1633 5.56588 12.3172C5.71591 12.4711 5.8002 12.6798 5.8002 12.8974ZM5.8002 9.61531C5.8002 9.83293 5.71591 10.0416 5.56588 10.1955C5.41585 10.3494 5.21237 10.4358 5.0002 10.4358C4.78802 10.4358 4.58454 10.3494 4.43451 10.1955C4.28448 10.0416 4.2002 9.83293 4.2002 9.61531C4.2002 9.3977 4.28448 9.189 4.43451 9.03512C4.58454 8.88125 4.78802 8.7948 5.0002 8.7948C5.21237 8.7948 5.41585 8.88125 5.56588 9.03512C5.71591 9.189 5.8002 9.3977 5.8002 9.61531Z"
				fill={color || "black"}
			/>
		</svg>
	);
};

export const BellIcon = ({ size, color, ...rest }: IconProps) => {
	return (
		<svg {...rest} width={size || "18"} height={size || "18"} viewBox="0 0 18 18" fill="none">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.00005 0.041626C7.2872 0.041626 5.64449 0.722055 4.43332 1.93323C3.22215 3.1444 2.54172 4.7871 2.54172 6.49996V7.08663C2.54167 7.66737 2.36973 8.23511 2.04755 8.71829L1.09172 10.1541C-0.0199466 11.8208 0.828387 14.0858 2.76089 14.6125C3.39005 14.7841 4.02505 14.9291 4.66422 15.0483L4.66589 15.0525C5.30589 16.7625 7.01839 17.9583 9.00005 17.9583C10.9817 17.9583 12.6942 16.7625 13.3351 15.0525L13.3367 15.0483C13.9769 14.9292 14.6119 14.7838 15.2401 14.6125C17.1726 14.0858 18.0209 11.8208 16.9092 10.1541L15.9526 8.71829C15.6304 8.23511 15.4584 7.66737 15.4584 7.08663V6.49996C15.4584 4.7871 14.778 3.1444 13.5668 1.93323C12.3556 0.722055 10.7129 0.041626 9.00005 0.041626ZM11.8134 15.2808C9.9442 15.5041 8.05507 15.5041 6.18589 15.2808C6.77839 16.1316 7.80922 16.7083 9.00005 16.7083C10.1909 16.7083 11.2209 16.1316 11.8134 15.2808ZM3.79172 6.49996C3.79172 5.11862 4.34045 3.79386 5.31721 2.81711C6.29396 1.84036 7.61872 1.29163 9.00005 1.29163C10.3814 1.29163 11.7062 1.84036 12.6829 2.81711C13.6597 3.79386 14.2084 5.11862 14.2084 6.49996V7.08663C14.2084 7.91412 14.4534 8.72329 14.9126 9.41162L15.8692 10.8475C16.0175 11.0695 16.1108 11.3235 16.1415 11.5887C16.1722 11.8539 16.1393 12.1226 16.0457 12.3726C15.9521 12.6226 15.8004 12.8467 15.6031 13.0265C15.4057 13.2063 15.1685 13.3366 14.9109 13.4066C11.0407 14.4621 6.95855 14.4621 3.08839 13.4066C2.83103 13.3364 2.59403 13.206 2.39692 13.0263C2.19981 12.8465 2.04822 12.6225 1.95464 12.3727C1.86106 12.1228 1.82816 11.8544 1.85866 11.5893C1.88915 11.3243 1.98217 11.0703 2.13005 10.8483L3.08839 9.41162C3.54717 8.72303 3.79189 7.91406 3.79172 7.08663V6.49996Z"
				fill="#0D062D"
			/>
		</svg>
	);
};

export const ChevronDown = ({ height, width, color, ...rest }: IconProps) => {
	return (
		<svg {...rest} height={height || "8"} width={width || "14"} viewBox="0 0 14 8" fill="none">
			<path
				d="M0.198412 0.206748C0.43891 -0.0438557 0.815252 -0.0666378 1.08045 0.138402L1.15643 0.206748L7 6.29553L12.8436 0.206748C13.0841 -0.0438557 13.4604 -0.0666378 13.7256 0.138402L13.8016 0.206748C14.0421 0.457352 14.064 0.849506 13.8672 1.12585L13.8016 1.20502L7.47901 7.79325C7.23851 8.04386 6.86217 8.06664 6.59697 7.8616L6.52099 7.79325L0.198412 1.20502C-0.0661372 0.929352 -0.0661372 0.482412 0.198412 0.206748Z"
				fill={color || "#0D062D"}
			/>
		</svg>
	);
};

export const DocumentIcon = ({ size, color, ...rest }: IconProps) => {
	return (
		<svg {...rest} width={size || "16"} height={size || "16"} viewBox="0 0 16 16" fill="none">
			<path
				d="M6 11.8334C5.93333 11.8334 5.87333 11.82 5.80667 11.7934C5.62 11.72 5.5 11.5334 5.5 11.3334V7.33337C5.5 7.06004 5.72667 6.83337 6 6.83337C6.27333 6.83337 6.5 7.06004 6.5 7.33337V10.1267L6.98 9.64671C7.17333 9.45337 7.49333 9.45337 7.68667 9.64671C7.88 9.84004 7.88 10.16 7.68667 10.3534L6.35333 11.6867C6.26 11.78 6.12667 11.8334 6 11.8334Z"
				fill={color || "#292D32"}
			/>
			<path
				d="M5.99964 11.8334C5.87297 11.8334 5.7463 11.7867 5.6463 11.6867L4.31297 10.3534C4.11964 10.16 4.11964 9.84004 4.31297 9.64671C4.5063 9.45338 4.8263 9.45338 5.01964 9.64671L6.35297 10.98C6.5463 11.1734 6.5463 11.4934 6.35297 11.6867C6.25297 11.7867 6.1263 11.8334 5.99964 11.8334Z"
				fill={color || "#292D32"}
			/>
			<path
				d="M9.99967 15.1667H5.99967C2.37967 15.1667 0.833008 13.62 0.833008 10V6.00004C0.833008 2.38004 2.37967 0.833374 5.99967 0.833374H9.33301C9.60634 0.833374 9.83301 1.06004 9.83301 1.33337C9.83301 1.60671 9.60634 1.83337 9.33301 1.83337H5.99967C2.92634 1.83337 1.83301 2.92671 1.83301 6.00004V10C1.83301 13.0734 2.92634 14.1667 5.99967 14.1667H9.99967C13.073 14.1667 14.1663 13.0734 14.1663 10V6.66671C14.1663 6.39337 14.393 6.16671 14.6663 6.16671C14.9397 6.16671 15.1663 6.39337 15.1663 6.66671V10C15.1663 13.62 13.6197 15.1667 9.99967 15.1667Z"
				fill={color || "#292D32"}
			/>
			<path
				d="M14.6663 7.1667H11.9997C9.71967 7.1667 8.83301 6.28003 8.83301 4.00003V1.33337C8.83301 1.13337 8.95301 0.9467 9.13967 0.873366C9.32634 0.793366 9.53967 0.840033 9.68634 0.980033L15.0197 6.31337C15.1597 6.45337 15.2063 6.67337 15.1263 6.86003C15.0463 7.0467 14.8663 7.1667 14.6663 7.1667ZM9.83301 2.54003V4.00003C9.83301 5.72003 10.2797 6.1667 11.9997 6.1667H13.4597L9.83301 2.54003Z"
				fill={color || "#292D32"}
			/>
		</svg>
	);
};

export const TrendingMovementIcon = ({ color, size, ...rest }: IconProps) => {
	return (
		<svg {...rest} width={size || "12"} height={size || "12"} viewBox="0 0 12 12" fill="none">
			<path
				d="M1.5 8.5L4.5 5.5L6.5 7.5L10.5 3.5"
				stroke={color || "#34CAA5"}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path d="M7 3.5H10.5V7" stroke={color || "#34CAA5"} strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
};
