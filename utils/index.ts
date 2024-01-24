import months from "@/data/months.json";

var currentDate = new Date();

/**
 * Format Date into MM DD, YYYY.
 * @param date - Optional, will use current date by default.
 * @param options: shortMonth {boolean} - for formatting month to three chars
 */

export const formatDate = (date?: Date, options?: { shortMonth?: boolean }) => {
	const { shortMonth } = options || {};
	const month = months[(date || currentDate).getMonth()];
	return `${month.slice(0, shortMonth ? 3 : month.length)} ${(date || currentDate).getDate()}, ${(
		date || currentDate
	).getFullYear()}`;
};

/**
 * Format amount into a amount-string representation {i.e K for thousands, M for millions}.
 * @param { number } amount - The number to be formatted.
 * @param options: withFraction - for formatting to decimal places
 * @returns A formatted amount in string.
 */
export function formatAmount(amount: number, options?: { withFraction?: boolean }): string {
	const { withFraction = false } = options || {};
	if (amount)
		if (amount.toString().length <= 4) {
			// Format with 2 decimal places for amounts with up to 5 digits
			return amount.toLocaleString(undefined, {
				minimumFractionDigits: withFraction ? 2 : 0,
				maximumFractionDigits: withFraction ? 2 : 0,
			});
		} else if (amount < 1000000) {
			// Format in thousands
			const thousands = Math.floor(amount / 1000);
			return `${thousands}K`;
		} else if (amount < 1000000000) {
			// Format in millions
			const millions = (amount / 1000000).toFixed(withFraction ? 1 : 0);
			return `${millions}M`;
		} else if (amount < 1000000000000) {
			// Format in billions
			const billions = (amount / 1000000000).toFixed(withFraction ? 1 : 0);
			return `${billions}B`;
		} else if (amount < 1000000000000000) {
			// Format in trillions
			const trillions = (amount / 1000000000000).toFixed(withFraction ? 1 : 0);
			return `${trillions}T`;
		} else {
			// For amounts beyond trillions, quadrillions, quintillions, and so on
			return "Amount too large to display";
		}
	return "";
}
