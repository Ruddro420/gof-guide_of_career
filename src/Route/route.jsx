import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import WebDev from "../Pages/WebDev/WebDev";
import AppDev from "../Pages/AppDev/AppDev";
import UiUx from "../Pages/UiUx/UiUx";
import About from "../Pages/About/About";
import Graphics from "../Pages/Graphics/Graphics";

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
                path: "/about",
                element: <About />,
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
            },
            {
                path: "/graphics-design",
                element: <Graphics />,
            }
        ]
    },
]);
