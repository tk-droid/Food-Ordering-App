import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";



    const Grocery = lazy(()=>import("./components/Grocery"))

    const AppLayout = ()=>{
        return <div className="app">
                <Header/>
                <Outlet/>
              </div>
    }

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element :  <AppLayout/>,
            children: [{
                path: '/About',
                element :  <About/>
            },{
                path: '/Contact',
                element :  <Contact/>
            },{
                path: '/',
                element: <Body/>
            },{
                path: '/city/delhi/:resId',
                element: <RestaurantMenu/>
            },
            {
                path: '/grocery',
                element: (<Suspense fallback={<Shimmer/>}>
                    <Grocery/>
                </Suspense>
                )
            }
        ],
            errorElement: <Error/>
        }
    ])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)
