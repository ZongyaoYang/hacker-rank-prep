// ---- Type A: Plain function-based Node practice ----

function getActiveUsers(users) {
  // TODO: return an array of names for users where isActive is true
  return users.filter((user) => user.isActive).map((user) => user.name);
}

// ---- Test harness (simulates what HackerRank does behind the scenes) ----
function runTests() {
  const tests = [
    {
      input: [
        { id: 1, name: "Alice", isActive: true },
        { id: 2, name: "Bob", isActive: false },
        { id: 3, name: "Charlie", isActive: true },
      ],
      expected: ["Alice", "Charlie"],
    },
    {
      input: [{ id: 1, name: "Dana", isActive: false }],
      expected: [],
    },
    {
      input: [],
      expected: [],
    },
  ];

  tests.forEach((test, i) => {
    const result = getActiveUsers(test.input);
    const passed = JSON.stringify(result) === JSON.stringify(test.expected);
    console.log(
      `Test ${i + 1}: ${passed ? "PASS ✅" : "FAIL ❌"}`,
      passed
        ? ""
        : `(got ${JSON.stringify(result)}, expected ${JSON.stringify(test.expected)})`,
    );
  });
}

runTests();
