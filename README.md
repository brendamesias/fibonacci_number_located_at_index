# Fibonacci number located at index

The sequence starts with 0 and 1,
then the subsequent numbers are obtained by the sum of the two previous numbers in the sequence. 

Finally:
list [x - 2] + list [x - 1] = next sequencem number

where (list) => stored fibonacci sequence

Function created with Javascript

## Code


```javascript

export default function fibonacci(n) {
	const list = [0, 1];
	for (let x = 2; x < n + 1; x += 1) {
		list.push(list[x - 2] + list[x - 1]);
	}
	return list[n];
}

```