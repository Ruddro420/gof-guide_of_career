import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import WebDev from "../Pages/WebDev/WebDev";
import AppDev from "../Pages/AppDev/AppDev";
import UiUx from "../Pages/UiUx/UiUx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/web-development",
                element: <WebDev />,
            },
            {
                path: "/app-development",
                element: <AppDev />,
            },
            {
                path: "/ui-ux",
                element: <UiUx />,
            }
        ]
    },
]);
