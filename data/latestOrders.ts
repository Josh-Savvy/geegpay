export type IOrder = {
	user: { avatar?: string; name: string };
	amount: number;
	date: string;
	status: "paid" | "refund" | "pending";
};

const latestOrders: IOrder[] = [
	{
		user: { name: "Cooper Press", avatar: "/assets/images/avatar_4.png" },
		amount: 100000,
		date: new Date().toDateString(),
		status: "pending",
	},
	{
		user: { name: "Marcus Bergson", avatar: "/assets/images/avatar_1.png" },
		amount: 80000,
		date: new Date().toDateString(),
		status: "paid",
	},
	{
		user: { name: "Jaydon Vaccaro", avatar: "/assets/images/avatar_2.png" },
		amount: 150000,
		date: new Date().toDateString(),
		status: "refund",
	},
	{
		user: { name: "Corey Schleifer", avatar: "/assets/images/avatar_3.png" },
		amount: 87000,
		date: new Date().toDateString(),
		status: "paid",
	},

	{
		user: { name: "Cooper Press", avatar: "/assets/images/avatar_4.png" },
		amount: 100000,
		date: new Date().toDateString(),
		status: "refund",
	},
	{
		user: { name: "Phillip Lubin", avatar: "/assets/images/avatar_5.png" },
		amount: 78000,
		date: new Date().toDateString(),
		status: "paid",
	},
	{
		user: { name: "Cooper Press", avatar: "/assets/images/avatar_4.png" },
		amount: 100000,
		date: new Date().toDateString(),
		status: "pending",
	},
];

export default latestOrders;
