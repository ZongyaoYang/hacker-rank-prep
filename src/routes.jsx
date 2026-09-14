import Counter from "./pages/counter/Counter";
import TodoApp from "./pages/todo-app/TodoApp";
import ListExercise from "./pages/lists-and-keys/ListExercise";

const routes = [
  {
    path: "/counter",
    label: "Counter",
    description: "useState basics",
    element: <Counter />,
  },
  {
    path: "/todo-app",
    label: "Counter",
    description: "state + lists + forms",
    element: <TodoApp />,
  },
  {
    path: "/lists-and-keys",
    label: "Lists & Keys",
    description: "rendering arrays",
    element: <ListExercise />,
  },
];

export default routes;
