export default (date) => {
	const d = new Date(date);
	// const dtf = new Intl.DateTimeFormat("en", {
	// 	year: "numeric",
	// 	month: "short",
	// 	day: "2-digit",
	// });

	let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
	let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
	let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);

	// const [{ value: mo }, { value: da }] = dtf.formatToParts(d);

	return `${da} ${mo}`;
};
