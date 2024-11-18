import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
const Grocery = lazy(()=>import("./components/Grocery"))
const Cart = lazy(()=>import("./components/Cart"))
const Contact = lazy(()=>import("./components/Contact"))

const AppLayout = ()=>{
const [UserName, SetUserName] = useState()
useEffect(()=>{
    const data = {
        name: "Taif k"
    }
    SetUserName(data.name)
},[])
        return (
            <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: UserName, SetUserName}}>
              <div className="app">
                <Header/>
                <Outlet/>
              </div>
        </UserContext.Provider>
        </Provider>
        
        )
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
                element :  <Suspense fallback={<div>Loading...</div>}>
                    <Contact/>
                    </Suspense>
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
                </Suspense>)
            },
            {
                path: "/cart",
                element: (<Suspense fallback={<div>Loading Cart...</div>}>
                <Cart/>
                </Suspense>)
            }
        ],
            errorElement: <Error/>
        }
    ])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)
