import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import WebDev from "../Pages/WebDev/WebDev";
import AppDev from "../Pages/AppDev/AppDev";
import UiUx from "../Pages/UiUx/UiUx";
import About from "../Pages/About/About";
import Graphics from "../Pages/Graphics/Graphics";
import LeadGeneration from "../Pages/Marketing/LeadGeneration";
import SocialMarketing from "../Pages/Marketing/SocialMarketing";
import AffiliateMarketing from "../Pages/Marketing/AffiliateMarketing";
import DropShipping from "../Pages/Marketing/DropShipping";
import Education from "../Pages/Education/Education";
import Terms from "../Pages/Terms/Terms";
import Policy from "../Pages/Terms/Policy";
import Career from "../Pages/Career/Career";

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
            },
            {
                path: "/lead-generation",
                element: <LeadGeneration />,
            },
            {
                path: "/social-media-marketing",
                element: <SocialMarketing />,
            },
            {
                path: "/affiliate-marketing",
                element: <AffiliateMarketing />,
            },
            {
                path: "/drop-shipping",
                element: <DropShipping />,
            },
            {
                path: "/ssc-and-hsc",
                element: <Education />,
            },
            {
                path: "/terms",
                element: <Terms />,
            },
            {
                path: "/policy",
                element: <Policy />,
            },
            {
                path: "/career",
                element: <Career />,
            },
        ]
    },
]);
