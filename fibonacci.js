function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55
