import "./App.css";
import InstructorPortal from "./Component/InstructorPortal/InstructorPortal";
import Layout from "./Component/Layout/Layout";
import Profile from "./Component/Profile/Profile";
import StudentPortal from "./Component/StudentPortal/StudentPortal";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <StudentPortal />,
      },
      {
        path:"instructorportal",
        element: <InstructorPortal />,
      },
      {
        path:"profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
