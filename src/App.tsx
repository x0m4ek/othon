import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
               <Home />
            ),
        },

    ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
