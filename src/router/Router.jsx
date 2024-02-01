import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main.jsx";
import Home from "../pages/home/Home.jsx";
import Menu from "../pages/shop/Menu.jsx";


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
                element: <Menu/>
            },
        ]
    },
  ]);

export default router;