const ListFiltering = () => {
  const users = [
    { id: 1, name: "Alice", age: 17 },
    { id: 2, name: "Bob", age: 22 },
    { id: 3, name: "Charlie", age: 15 },
    { id: 4, name: "Dana", age: 30 },
  ];

  return (
    <ul>
      {users
        .filter((user) => user.age >= 18)
        .map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
    </ul>
  );
};

export default ListFiltering;
