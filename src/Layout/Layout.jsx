import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import MainFooter from "../components/Footer/MainFooter";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <MainFooter />
        </div>
    );
};

export default Layout;