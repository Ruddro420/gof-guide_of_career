import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/Header/Header";
import MainFooter from "../components/Footer/MainFooter";

const Layout = () => {
    return (
        <div>
            <Header />
            <ScrollRestoration />
            <Outlet />
            <MainFooter />
        </div>
    );
};

export default Layout;