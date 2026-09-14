// ---- Practice: Async/Await + Promise.all (with aggregation) ----
// fetchProductPrice(productId) is already implemented - do not change it.

const priceDatabase = {
  201: 19.99,
  202: 5.5,
  203: 42.0,
};

function fetchProductPrice(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (priceDatabase[productId] !== undefined) {
        resolve(priceDatabase[productId]);
      } else {
        reject("Product not found");
      }
    }, 50);
  });
}

// TODO: implement this
// Requirements:
// - Fetch all given productIds' prices IN PARALLEL (use Promise.all)
// - Return the SUM of all prices
// - If a productId doesn't exist, treat its price as 0 (don't throw)
async function getTotalPrice(productIds) {
  // your code here
  const priceList = Promise.all(productIds.map(async id => {
    try {
        return await fetchProductPrice(id);
    } catch(err) {
        return 0
    }
  }));

  return (await priceList).reduce((acc, curr) => {
    return acc + curr;
  }, 0)
}

// ---- Test harness ----
async function runTests() {
  const result1 = await getTotalPrice([201, 202, 203]);
  const expected1 = 67.49;
  const passed1 = Math.abs(result1 - expected1) < 0.001;
  console.log(
    `Test 1: ${passed1 ? "PASS ✅" : "FAIL ❌"}`,
    passed1 ? "" : `(got ${result1}, expected ${expected1})`,
  );

  const result2 = await getTotalPrice([201, 999, 203]);
  const expected2 = 61.99; // 999 counts as 0
  const passed2 = Math.abs(result2 - expected2) < 0.001;
  console.log(
    `Test 2: ${passed2 ? "PASS ✅" : "FAIL ❌"}`,
    passed2 ? "" : `(got ${result2}, expected ${expected2})`,
  );

  const result3 = await getTotalPrice([]);
  const passed3 = result3 === 0;
  console.log(
    `Test 3: ${passed3 ? "PASS ✅" : "FAIL ❌"}`,
    passed3 ? "" : `(got ${result3})`,
  );

  const result4 = await getTotalPrice([888, 999]);
  const passed4 = result4 === 0;
  console.log(
    `Test 4: ${passed4 ? "PASS ✅" : "FAIL ❌"}`,
    passed4 ? "" : `(got ${result4})`,
  );
}

runTests();
