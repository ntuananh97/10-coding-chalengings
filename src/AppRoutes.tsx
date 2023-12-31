import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CountDownTime from "./pages/CountDownTime";
import QuizApp from "./pages/QuizApp/QuizApp";
import RecipeApp from "./pages/RecipeApp/RecipeApp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/couting-down",
    element: <CountDownTime />,
  },
  {
    path: "/quiz-app",
    element: <QuizApp />,
  },
  {
    path: "/recipe-app",
    element: <RecipeApp />,
  },
]);
