import Counter from "./pages/counter/Counter";
import TodoApp from "./pages/todo-app/TodoApp";
import ListExercise from "./pages/lists-and-keys/ListExercise";
import ControlledForm from "./pages/controlled-input-form/ControlledForm";

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
  {
    path: "/controlled-form",
    label: "Controlled Input Form",
    description: "a form with submit button",
    element: <ControlledForm />
  }
];

export default routes;
