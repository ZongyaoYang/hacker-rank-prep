// ---- Practice: Sort an array of objects by a field ----
// Write a function sortUsersByAge(users) that takes an array of user
// objects (each with id, name, age) and returns a NEW array sorted by
// age in ascending order. The original array should NOT be modified.

function sortUsersByAge(users) {
  // TODO: implement this
  return [...users].sort((a, b) => a.age - b.age);
}

// ---- Test harness ----
function runTests() {
  const original = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 22 },
    { id: 3, name: "Charlie", age: 45 },
  ];
  const originalCopy = JSON.parse(JSON.stringify(original)); // snapshot to compare later

  const result = sortUsersByAge(original);

  const expectedOrder = ["Bob", "Alice", "Charlie"]; // ages: 22, 30, 45
  const actualOrder = result.map((u) => u.name);
  const orderPassed =
    JSON.stringify(actualOrder) === JSON.stringify(expectedOrder);
  console.log(
    `Test 1 (correct order): ${orderPassed ? "PASS ✅" : "FAIL ❌"}`,
    orderPassed ? "" : `(got order: ${JSON.stringify(actualOrder)})`,
  );

  const notMutated = JSON.stringify(original) === JSON.stringify(originalCopy);
  console.log(
    `Test 2 (original array unmutated): ${notMutated ? "PASS ✅" : "FAIL ❌"}`,
    notMutated ? "" : `(original array was modified!)`,
  );

  const emptyResult = sortUsersByAge([]);
  const emptyPassed = Array.isArray(emptyResult) && emptyResult.length === 0;
  console.log(`Test 3 (empty array): ${emptyPassed ? "PASS ✅" : "FAIL ❌"}`);
}

runTests();
