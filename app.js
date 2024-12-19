import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./src/components/Shimmer";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";
import { HashRouter as Router } from 'react-router-dom';



const Grocery = lazy(()=>import("./src/components/Grocery"))

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
                path: 'About',
                element :  <About/>
            },{
                path: 'Contact',
                element :  <Contact/>
            },{
                path: '/',
                element: <Body/>
            },{
                path: 'city/delhi/:resId',
                element: <RestaurantMenu/>
            },
            {
                path: 'grocery',
                element: (<Suspense fallback={<Shimmer/>}>
                    <Grocery/>
                </Suspense>
                )
            },
            {
                path: "cart",
                element: <Cart/>
            }
        ],
            errorElement: <Error/>
        }
    ])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={appRouter}/>
    </Suspense>
    )
