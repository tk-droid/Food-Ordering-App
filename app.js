
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
import Grocery from "./src/components/Grocery";

// const Grocery = lazy(()=>import("./src/components/Grocery"))

const AppLayout = ()=>{
const [UserName, SetUserName] = useState()
useEffect(()=>{
    const data = {
        name: "Taif k"
    }
    SetUserName(data.name)
    if (window.innerWidth <= 768) {
        const metaViewport = document.querySelector('meta[name="viewport"]');
        if (metaViewport) {
          metaViewport.setAttribute('content', 'width=1024, initial-scale=1, user-scalable=no');
        }
      }
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
            children: [
                {
                path: 'About',
                element :  <About/>,
                errorElement: <Error/>
            },{
                path: 'Contact',
                element :  <Contact/>,
                errorElement: <Error/>
            },{
                path: '/',
                element: <Body/>,
                errorElement: <Error/>
            },{
                path: 'city/delhi/:resId',
                element: <RestaurantMenu/>,
                errorElement: <Error/>
            },
            {
                path: 'grocery',
                element: <Grocery/>,
            },
            {
                path: "cart",
                element: <Cart/>,
                errorElement: <Error/>
            }
        ]
        },
    ])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)

