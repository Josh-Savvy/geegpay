import months from "@/data/months.json";

const currentDate = new Date();

export const formatDate = (date?: Date, options?: { shortMonth?: boolean }) => {
	const { shortMonth } = options || {};
	const month = months[(date || currentDate).getMonth()];

	return `${month.slice(0, shortMonth ? 3 : month.length)} ${(date || currentDate).getDate()}, ${(
		date || currentDate
	).getFullYear()}`;
};
