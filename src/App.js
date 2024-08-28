import "./App.css";
import InstructorPortal from "./Component/InstructorPortal/InstructorPortal";
import Profile from "./Component/Profile/Profile";
import StudentPortal from "./Component/StudentPortal/StudentPortal";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StudentPortal />,
      children: [
        { path: "instructorportal", element: <InstructorPortal /> },
        { path: "profile", element: <Profile /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
