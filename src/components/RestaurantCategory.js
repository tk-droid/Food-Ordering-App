import { useState } from "react"
import ItemList from "./ItemList"
const RestaurantCateogory = ({data, showItems, setShowIndex, dummy})=>{ // console.log(data) 
    const handleClick = ()=>{
        setShowIndex()
    }
    return (
        <div>
            {/*Header */}
            <div className="w-6/12 mx-auto my-5 bg-gray-50 shadow-lg p-4">
                <div className="justify-between flex cursor-pointer" onClick={handleClick}>
                <span className="font-semibold text-lg">{data.title} ({data.categories.length})</span>
                <span>🔄</span>
                </div>
                { showItems && <ItemList items={data.categories} dummy={dummy}/>}
            </div>
        </div>
    )
}
export default RestaurantCateogory