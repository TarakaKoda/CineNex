import { createBrowserRouter } from "react-router-dom";
import { Actors, Layout, MovieInformation, Movies, Profile } from "./pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "movie/:id", element: <MovieInformation /> },
      { path: "actors/:id", element: <Actors /> },
      { path: "profile/:id", element: <Profile /> },
      { path: "/", element: <Movies /> },
    ],
  },
]);

export default routes;
