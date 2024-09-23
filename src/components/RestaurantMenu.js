import useRestaurantMenu from "../utils/useRestaurantMenu"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"

const RestaurantMenu = () => {
  const { resId } = useParams()
  const resInfo = useRestaurantMenu(resId)

  if (resInfo === null) return <Shimmer />

  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
    console.log(categories)

  return (
    <div className="text-center">
      <div >
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-semibold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>
    </div>
  )
}

export default RestaurantMenu
