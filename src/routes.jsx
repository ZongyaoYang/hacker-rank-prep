import Counter from "./pages/counter/Counter";
import TodoApp from "./pages/todo-app/TodoApp";
import ListExercise from "./pages/lists-and-keys/ListExercise";
import ControlledForm from "./pages/controlled-input-form/ControlledForm";
import ListFiltering from "./pages/list-filtering/ListFiltering";
import ToggleRendering from "./pages/toggle-rendering/ToggleRendering";

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
    element: <ControlledForm />,
  },
  {
    path: "/list-filtering",
    label: "List Rendering / Filtering",
    description: "filter a list of users",
    element: <ListFiltering />,
  },
  {
    path: "/toggle",
    label: "Toggle / Conditional Rendering",
    description: "A toggle button component",
    element: <ToggleRendering />,
  },
];

export default routes;
