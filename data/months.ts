export type Month =
	| "January"
	| "February"
	| "March"
	| "April"
	| "May"
	| "June"
	| "July"
	| "August"
	| "September"
	| "October"
	| "November"
	| "December";

const monthsArr = Array.from({ length: 12 }, (_, i) => {
	const d = new Date();
	d.setMonth(i);
	return d.toLocaleDateString(undefined, { month: "long" });
}) as Month[];

export default monthsArr;
