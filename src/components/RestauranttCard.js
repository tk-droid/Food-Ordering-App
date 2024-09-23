import { CDN_logo } from "../utils/constants"

const RestaurantCard = (props)=>{
    const {resData} = props
    const {name,cuisines,avgRating,costForTwo,deliveryTime,cloudinaryImageId } = resData.info

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-400">
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
        </div>
    )
}

 export default RestaurantCard 