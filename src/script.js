export default function fibonacci(n) {
	const list = [0, 1];
	for (let x = 2; x < n + 1; x += 1) {
		list.push(list[x - 2] + list[x - 1]);
	}
	return list[n];
}