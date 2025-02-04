import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home"

import ListUsers from "./pages/ListUsers";

const router = createBrowserRouter([
     {
       path: "/",
       element: <Home />
    },

    {
        path: "/Novos-Usuários",
        element: <ListUsers />
     },

])

export default router