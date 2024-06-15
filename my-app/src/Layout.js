import MyNavbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
    <div>
        <MyNavbar/>
        <main>
            <Outlet/>
        </main>
    </div>
    );
}

export default Layout;