// ---- Practice: Group/Count Data ----
// Write a function countByRole(users) that takes an array of user objects
// (each with id, name, role) and returns an object where each key is a
// role, and the value is the count of users with that role.

function countByRole(users) {
  // TODO: implement this
  return users.reduce((acc, curr) => {
    acc[curr.role] = (acc[curr.role] || 0) + 1;
    return acc;
  }, {});
}

// ---- Test harness ----
function runTests() {
  const tests = [
    {
      input: [
        { id: 1, name: "Alice", role: "admin" },
        { id: 2, name: "Bob", role: "editor" },
        { id: 3, name: "Charlie", role: "admin" },
        { id: 4, name: "Dana", role: "viewer" },
        { id: 5, name: "Eve", role: "editor" },
      ],
      expected: { admin: 2, editor: 2, viewer: 1 },
    },
    {
      input: [{ id: 1, name: "Alice", role: "admin" }],
      expected: { admin: 1 },
    },
    {
      input: [],
      expected: {},
    },
  ];

  tests.forEach((test, i) => {
    const result = countByRole(test.input);
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
