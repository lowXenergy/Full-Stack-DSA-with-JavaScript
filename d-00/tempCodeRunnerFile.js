function prime_factors(n) {
    if (n <= 1) return "No prime factors";

    let factors = [];

    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            factors.push(i.toString());
            n = Math.floor(n / i);
        }
    }

    return factors.join("\n");
}

// Example
console.log(prime_factors(60));