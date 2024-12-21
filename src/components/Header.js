import { RESTAURANTCARD_logo } from "../utils/constants"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"
import React from "react"


const Header = ()=>{
   let [btnName, setbtnName] = useState(["Login"])
   const onlineStatus = useOnlineStatus()
   const {loggedInUser} = useContext(UserContext)

   const cartItems = useSelector((store)=>store.cart.items)  // this is sucscribing to a small portion of the store
   
  console.log(cartItems)
    return (<div className="flex justify-between bg-green-300 shadow-lg m-2">
              <div className="logo-container">
              {<img className="w-40" src={RESTAURANTCARD_logo}/> }
              </div>
              <div className="nav-items flex items-center">
                <ul className="flex p-4 m-4">
                   <li className="px-3">Internet Status : {onlineStatus ? "🟢" : "🔴"}</li>
                   <li className="px-3"><Link to='/'>Home</Link></li>
                   <li className="px-3"><Link to='/About'>About</Link></li>
                   <li className="px-3"><Link to='/contact'>Contact</Link></li>

                   <li className="px-3">
  <Link 
    to="/grocery" 
    className="text-md md:text-xl lg:text-lg  inline-block transform transition-all duration-300 ease-in-out hover:shadow-2xl animate-bounce"
  >
    Grocery
  </Link>
</li>

                   
                   <li className="px-3"><Link to="/cart">Cart({cartItems.length})</Link></li> 
                   <button className="Login" onClick={()=>{
                     return btnName==="Login" ? setbtnName("Logout"):setbtnName("Login")
                   }}>{btnName}</button>
                   {/* <li className="px-3 font-bold">User: {loggedInUser}</li> */}
                </ul>
              </div>
           </div>
 )
}

export default Header