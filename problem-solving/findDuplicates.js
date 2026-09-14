// ---- Practice: Find Duplicates / Frequency Count ----
// Write findDuplicates(arr) that takes an array of numbers and returns a
// NEW array containing only the numbers that appear more than once, with
// no duplicates in the result, in the order they first appeared as duplicates.

function findDuplicates(arr) {
  // TODO: implement this
  const seen = new Set();
  const duplicates = new Set();

  arr.forEach((num) => {
    if (!seen.has(num)) {
      seen.add(num);
    } else {
      duplicates.add(num);
    }
  });

  return [...duplicates];
}

// ---- Test harness ----
function runTests() {
  const tests = [
    { input: [1, 2, 3, 2, 4, 5, 1], expected: [2, 1] },
    { input: [1, 2, 3], expected: [] },
    { input: [4, 4, 4, 4], expected: [4] },
    { input: [], expected: [] },
    { input: [5, 5, 6, 6, 7], expected: [5, 6] },
  ];

  tests.forEach((test, i) => {
    const result = findDuplicates(test.input);
    const passed = JSON.stringify(result) === JSON.stringify(test.expected);
    console.log(
      `Test ${i + 1}: ${passed ? "PASS ✅" : "FAIL ❌"}`,
      passed
        ? ""
        : `(input: ${JSON.stringify(test.input)}, got ${JSON.stringify(result)}, expected ${JSON.stringify(test.expected)})`,
    );
  });
}

runTests();
