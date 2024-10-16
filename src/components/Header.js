import { RESTAURANTCARD_logo } from "../utils/constants"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"

const Header = ()=>{
   let [btnName, setbtnName] = useState(["Login"])
   const onlineStatus = useOnlineStatus()
   const {loggedInUser} = useContext(UserContext)

   const cartItems = useSelector((store)=>store.cart.items)  // this is sucscribing to a small portion of the store
   
  console.log(cartItems)
    return (<div className="flex justify-between bg-pink-100 shadow-lg m-2">
              <div className="logo-container">
              <img className="w-56" src={RESTAURANTCARD_logo}/>
              </div>
              <div className="nav-items flex items-center">
                <ul className="flex p-4 m-4">
                   <li className="px-3">Internet Status : {onlineStatus ? "🟢" : "🔴"}</li>
                   <li className="px-3"><Link to='/'>Home</Link></li>
                   <li className="px-3"><Link to='/About'>About</Link></li>
                   <li className="px-3"><Link to='/contact'>Contact</Link></li>
                   <li className="px-3"><Link to="/grocery">Grocery</Link></li>
                   <li className="px-3 font-bold"><Link to="/cart">Cart ({cartItems.length}Items)</Link></li> 
                   <button className="Login" onClick={()=>{
                     return btnName==="Login" ? setbtnName("Logout"):setbtnName("Login")
                   }}>{btnName}</button>
                   <li className="px-3 font-bold">User: {loggedInUser}</li>
                </ul>
              </div>
           </div>
 )
}

export default Header