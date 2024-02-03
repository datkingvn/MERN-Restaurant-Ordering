import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main.jsx";
import Home from "../pages/home/Home.jsx";
import Menu from "../pages/shop/Menu.jsx";
import Signup from "../components/Signup.jsx";
import PrivateRouter from "../PrivateRouter/PrivateRouter.jsx";
import UpdateProfile from "../pages/UserSettings/UpdateProfile.jsx";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/menu",
                element: <PrivateRouter><Menu/></PrivateRouter>
            },
            {
                path: "/update-profile",
                element: <PrivateRouter><UpdateProfile/></PrivateRouter>
            },
        ],
    },
    {
        path: "/signup",
        element: <Signup/>
    }
  ]);

export default router;