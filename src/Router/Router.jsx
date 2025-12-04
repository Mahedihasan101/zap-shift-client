import { createBrowserRouter } from "react-router";
import { Component } from "react";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayOut from "../Layouts/AuthlayOut";
import LogIn from "../Pages/Auth/Login/LogIn";
import Register from "../Pages/Auth/Login/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path:'coverage',
                Component:Coverage,
            }
        ]
    },
    {
        Path:'/',
        Component:AuthLayOut,
        children:[
            {
                path:'login',
                Component:LogIn
            },
            {
                path:'register',
                Component:Register

            }
        ]
    }
]);