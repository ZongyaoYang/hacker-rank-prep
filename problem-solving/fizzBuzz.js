// ---- Practice: FizzBuzz-style logic ----
// Write fizzBuzz(n) that returns an array of strings for numbers 1 to n.
// - Multiples of 3: "Fizz"
// - Multiples of 5: "Buzz"
// - Multiples of both 3 and 5: "FizzBuzz"
// - Otherwise: the number itself, as a string

function fizzBuzz(n) {
  // TODO: implement this
  const res = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push("FizzBuzz");
    } else if (i % 3 === 0) {
      res.push("Fizz");
    } else if (i % 5 === 0) {
      res.push("Buzz");
    } else {
     res.push(i.toString());
    }
  }
  return res;
}

// ---- Test harness ----
function runTests() {
  const tests = [
    {
      input: 15,
      expected: [
        "1",
        "2",
        "Fizz",
        "4",
        "Buzz",
        "Fizz",
        "7",
        "8",
        "Fizz",
        "Buzz",
        "11",
        "Fizz",
        "13",
        "14",
        "FizzBuzz",
      ],
    },
    { input: 1, expected: ["1"] },
    { input: 3, expected: ["1", "2", "Fizz"] },
    { input: 5, expected: ["1", "2", "Fizz", "4", "Buzz"] },
    { input: 0, expected: [] },
  ];

  tests.forEach((test, i) => {
    const result = fizzBuzz(test.input);
    const passed = JSON.stringify(result) === JSON.stringify(test.expected);
    console.log(
      `Test ${i + 1}: ${passed ? "PASS ✅" : "FAIL ❌"}`,
      passed
        ? ""
        : `(n=${test.input}, got ${JSON.stringify(result)}, expected ${JSON.stringify(test.expected)})`,
    );
  });
}

runTests();
