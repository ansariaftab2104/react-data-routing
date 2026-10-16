import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import MainLayout from "../layout/mainLayout";

const AppRoutes = () => {

    const router = createBrowserRouter( // 3.
       [
        {
            path: '/',
            element: <MainLayout/>,
            children: [
                {
                    path: '',
                    element: <Home/>
                },
                {
                    path: 'about',
                    element: <About/>
                },
                {
                    path: 'services',
                    element: <Services/>
                },
            ]
        }
       ]
    )

  return <RouterProvider router={router} />; // 2.
};

export default AppRoutes;
