import { createBrowserRouter } from "react-router";
import MainDashBoardCom from "../layout/MainDashBoardCom";
import Home from "../components/Home";
import About from "../components/About";
import PageNotFound from "../layout/PageNotFound";
const routing = createBrowserRouter([
    { path: "", element: <MainDashBoardCom /> },
    { path: "maindashboard", element: <MainDashBoardCom /> ,children:[
        {path:"home",element:<Home/>},
        {path:"about",element:<About/>}
    ]},
    {path:"*",element:<PageNotFound/>}
]);
export default routing;