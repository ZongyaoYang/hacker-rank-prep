// ---- Practice: Harder / Multi-step Node.js problem ----
// fetchWarehouseInventory(warehouseId) is already implemented - do not change it.
// Resolves with an array of items: { category, quantity, price }
// Rejects with "Warehouse not found" if the id is invalid.

const warehouseData = {
  1: [
    { category: "Electronics", quantity: 10, price: 299.99 },
    { category: "Furniture", quantity: 5, price: 149.5 },
  ],
  2: [
    { category: "Electronics", quantity: 3, price: 199.99 },
    { category: "Books", quantity: 20, price: 12.99 },
  ],
  3: [
    { category: "Furniture", quantity: 2, price: 89.0 },
    { category: "Books", quantity: 5, price: 15.0 },
  ],
};

function fetchWarehouseInventory(warehouseId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (warehouseData[warehouseId]) {
        resolve(warehouseData[warehouseId]);
      } else {
        reject("Warehouse not found");
      }
    }, 50);
  });
}

// TODO: implement this
// Requirements:
// 1. Fetch inventory from ALL given warehouseIds, IN PARALLEL
// 2. Skip any warehouse that fails to fetch (don't throw/crash)
// 3. Combine all items from all successful warehouses into one list
// 4. Group items by category
// 5. For each category, compute: totalQuantity (sum), averagePrice (avg, rounded to 2 decimals)
// 6. Return an array of { category, totalQuantity, averagePrice }, SORTED alphabetically by category
async function generateInventoryReport(warehouseIds) {
  // your code here
  const allInventories = Promise.all(
    warehouseIds.map(async (id) => {
      try {
        return await fetchWarehouseInventory(id);
      } catch (err) {
        return [];
      }
    }),
  );

  const combinedInventories = [];
  (await allInventories).forEach((inventories) => {
    inventories.forEach((inventory) => combinedInventories.push(inventory));
  });

  const groupedInventories = groupByCategory(combinedInventories);

  return Object.keys(groupedInventories)
    .sort()
    .map((cate) => {
      const totalQuantity = groupedInventories[cate].reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0);
      const totalPrice = groupedInventories[cate].reduce((acc, curr) => {
        return acc + curr.price;
      }, 0);

      const averagePrice = totalPrice / groupedInventories[cate].length;
      return {
        category: cate,
        totalQuantity,
        averagePrice,
      };
    });
}

function groupByCategory(inventories) {
  const res = {};
  inventories.forEach((inventory) => {
    if (inventory.category in res) {
      res[inventory.category].push(inventory);
    } else {
      res[inventory.category] = [inventory];
    }
  });
  return res;
}

// ---- Test harness ----
async function runTests() {
  const result1 = await generateInventoryReport([1, 2, 3]);
  console.log("Test 1 result:", JSON.stringify(result1, null, 2));

  const result2 = await generateInventoryReport([1, 999, 3]);
  console.log("\nTest 2 result:", JSON.stringify(result2, null, 2));

  const result3 = await generateInventoryReport([888, 999]);
  console.log("\nTest 3 result:", JSON.stringify(result3, null, 2));

  const result4 = await generateInventoryReport([]);
  console.log("\nTest 4 result:", JSON.stringify(result4, null, 2));
}

runTests();
