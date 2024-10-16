import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux"
const Cart = ()=>{

    const cartItems = useSelector((store)=>store.cart.items)
    console.log(cartItems)
    
    const dispatch = useDispatch()
     const handleClearCart = ()=>{
        dispatch(clearItem())
        console.log("Clear cart clicked")
     }
    return <div className="text-center p-2 m-2">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="m-auto w-6/12">
            <button className="p-2 m-2  bg-black text-white rounded-lg"
            onClick={handleClearCart}>
                Clear Cart
            </button>
        </div>
        <div>
            <ItemList items={cartItems}/>
        </div>
        </div>
}
export default Cart