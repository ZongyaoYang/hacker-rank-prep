// ---- Practice: Express POST route with validation ----
// Add a POST /users route. It should accept a JSON body with `name` and
// `role` fields.
// - If either field is missing/empty: respond 400 with { error: "name and role are required" }
// - If valid: add the user to the `users` array with an auto-incremented id,
//   and respond 201 with the newly created user object.

const express = require("express");
const app = express();
app.use(express.json());

let users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "editor" },
];

// TODO: implement this route
app.post("/users", (req, res) => {
  // your code here
  if (!req.body.name || !req.body.role) {
    return res.status(400).json({ error: "name and role are required" });
  }
  const id = users.length + 1;
  const user = {
    id: id,
    name: req.body.name,
    role: req.body.role,
  };

  users.push(user);
  return res.status(201).json(user);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Test with:`);
  console.log(
    `  curl -X POST http://localhost:${PORT}/users -H "Content-Type: application/json" -d '{"name":"Charlie","role":"viewer"}'`,
  );
  console.log(
    `  curl -X POST http://localhost:${PORT}/users -H "Content-Type: application/json" -d '{"name":""}'`,
  );
});
