import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Tasks from "../Pages/Tasks/Tasks";

const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/tasks",
                element: <Tasks />
            }
        ]
    }
])
export default MainRoutes;




