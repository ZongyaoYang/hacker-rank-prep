// ---- Practice: Async/Promises ----
// Write a function fetchUserById(id) that simulates fetching a user from
// a database. It should return a Promise that resolves with the matching
// user object after a short delay (use setTimeout). If no user with that
// id exists, the Promise should reject with the error message "User not found".

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

function fetchUserById(id) {
  // TODO: implement this - return a new Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((u) => u.id === id);
      if (!!user) {
        resolve(user);
      } else {
        reject("User not found");
      }
    }, 100);
  });
}

// ---- Test harness ----
async function runTests() {
  // Test 1: existing user should resolve
  try {
    const user = await fetchUserById(1);
    const passed =
      JSON.stringify(user) === JSON.stringify({ id: 1, name: "Alice" });
    console.log(
      `Test 1: ${passed ? "PASS ✅" : "FAIL ❌"}`,
      passed ? "" : `(got ${JSON.stringify(user)})`,
    );
  } catch (err) {
    console.log("Test 1: FAIL ❌ (threw/rejected unexpectedly)", err);
  }

  // Test 2: another existing user should resolve
  try {
    const user = await fetchUserById(2);
    const passed =
      JSON.stringify(user) === JSON.stringify({ id: 2, name: "Bob" });
    console.log(
      `Test 2: ${passed ? "PASS ✅" : "FAIL ❌"}`,
      passed ? "" : `(got ${JSON.stringify(user)})`,
    );
  } catch (err) {
    console.log("Test 2: FAIL ❌ (threw/rejected unexpectedly)", err);
  }

  // Test 3: non-existent user should reject with "User not found"
  try {
    await fetchUserById(999);
    console.log("Test 3: FAIL ❌ (expected rejection, but it resolved)");
  } catch (err) {
    const passed = err === "User not found";
    console.log(
      `Test 3: ${passed ? "PASS ✅" : "FAIL ❌"}`,
      passed ? "" : `(got error: ${err})`,
    );
  }
}

runTests();
