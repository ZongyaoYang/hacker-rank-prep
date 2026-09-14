// ---- Type B: Express route practice ----

const express = require("express");
const app = express();
app.use(express.json());

const users = [
  { id: 1, name: "Alice", isActive: true },
  { id: 2, name: "Bob", isActive: false },
  { id: 3, name: "Charlie", isActive: true },
];

// TODO: implement this route so it returns only active users' names as JSON
app.get("/users/active", (req, res) => {
  // your code here
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Try: curl http://localhost:${PORT}/users/active`);
});
