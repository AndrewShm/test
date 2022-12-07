import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from '../pages/Home/Home';
import Favorites from "../pages/Favorites/Favorites";
import Orders from "../pages/Orders/Orders";
import Feedback from "../pages/Feedback/Feedback";
import App from "../App";

import { PATHS } from "./paths";

const BrowserRouter = createBrowserRouter ([
    {
        path: PATHS.root,
        element: <Home />,
    },
    {
        path: PATHS.app,
        element: <App />
    },
    {
        path: PATHS.favorites,
        element: <Favorites />,
    },
    {
        path: PATHS.feedback,
        element: <Feedback />,
    },
    {
        path: PATHS.orders,
        element: <Orders />,
    }
]);

export default BrowserRouter;