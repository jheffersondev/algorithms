function fibonacci(n: number) {
    const sequence = [0, 1];

    for (let i: number = 2; i < n; i++) {
        sequence[i] = sequence[i - 2] + sequence[i - 1];
    }

    return sequence;
}

console.log(fibonacci(2));
console.log(fibonacci(10));
