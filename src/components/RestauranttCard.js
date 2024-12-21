
import { CDN_logo } from "../utils/constants"
import React from "react"

const RestaurantCard = React.memo((props)=>{
    const {resData} = props
    console.log(resData)
    const {name,cuisines,avgRating,costForTwo,deliveryTime,cloudinaryImageId } = resData.info
    return (
        <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg hover:bg-green-100">
            <img
             className="rounded-lg" alt="res-logo" 
             src={CDN_logo+ 
                cloudinaryImageId}
             />
           <h3 className="font-semibold py-2 text-lg">{name}</h3>
           <h4>{cuisines.join(", ")}</h4>
           <h4>{avgRating}</h4>
           <h4>{costForTwo}</h4>
           <h4>{deliveryTime}</h4>
        </div>)
        })

export default RestaurantCard