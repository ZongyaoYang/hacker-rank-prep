// ---- Practice: Async/Await (closer to real test style) ----
// fetchOrderStatus(orderId) is already implemented below - do not change it.
// It simulates an API call: resolves with a status string after a delay,
// or rejects with "Order not found" if the id doesn't exist.

const orderDatabase = {
  101: "Shipped",
  102: "Processing",
  103: "Delivered",
};

function fetchOrderStatus(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orderDatabase[orderId]) {
        resolve(orderDatabase[orderId]);
      } else {
        reject("Order not found");
      }
    }, 50);
  });
}

// TODO: implement this using async/await
// Requirements:
// - Fetch the status of ALL given orderIds
// - Return an array of results, in the SAME ORDER as the input orderIds
// - If a given orderId doesn't exist, its entry in the result array
//   should be the string "Error: not found" (not a thrown error)
async function getAllOrderStatuses(orderIds) {
  // your code here
  //   const res = [];

  //   for (const id of orderIds) {
  //     try {
  //       const status = await fetchOrderStatus(id);
  //       if (!!status) {
  //         res.push(status);
  //       }
  //     } catch (err) {
  //       res.push("Error: not found");
  //     }
  //   }
  //   return res;

  return Promise.all(
    orderIds.map(async (id) => {
      try {
        return await fetchOrderStatus(id);
      } catch (err) {
        return "Error: not found";
      }
    }),
  );
}

// ---- Test harness ----
async function runTests() {
  const result1 = await getAllOrderStatuses([101, 102, 103]);
  const expected1 = ["Shipped", "Processing", "Delivered"];
  const passed1 = JSON.stringify(result1) === JSON.stringify(expected1);
  console.log(
    `Test 1: ${passed1 ? "PASS ✅" : "FAIL ❌"}`,
    passed1 ? "" : `(got ${JSON.stringify(result1)})`,
  );

  const result2 = await getAllOrderStatuses([101, 999, 103]);
  const expected2 = ["Shipped", "Error: not found", "Delivered"];
  const passed2 = JSON.stringify(result2) === JSON.stringify(expected2);
  console.log(
    `Test 2: ${passed2 ? "PASS ✅" : "FAIL ❌"}`,
    passed2 ? "" : `(got ${JSON.stringify(result2)})`,
  );

  const result3 = await getAllOrderStatuses([]);
  const passed3 = Array.isArray(result3) && result3.length === 0;
  console.log(
    `Test 3: ${passed3 ? "PASS ✅" : "FAIL ❌"}`,
    passed3 ? "" : `(got ${JSON.stringify(result3)})`,
  );

  const result4 = await getAllOrderStatuses([888, 999]);
  const expected4 = ["Error: not found", "Error: not found"];
  const passed4 = JSON.stringify(result4) === JSON.stringify(expected4);
  console.log(
    `Test 4: ${passed4 ? "PASS ✅" : "FAIL ❌"}`,
    passed4 ? "" : `(got ${JSON.stringify(result4)})`,
  );
}

runTests();
