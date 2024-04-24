import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Movies from "./pages/Movie";
import Actors from "./pages/Actors";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />
  },
  {
    path: "/movie/:id",
    element: <Movies/>,
    errorElement: <ErrorPage />
  },
];

export default routes;