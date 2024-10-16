import RestaurantCard from "./RestauranttCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import TicTacToe from "./TicTacToe";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [searchText, setsearchText] = useState("")
    const [filteredRestaurant, setfilteredRestaurant] = useState([])
    const {loggedInUser,  SetUserName} = useContext(UserContext)

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };
const onlineStatus = useOnlineStatus() 

if(onlineStatus === false) {
    return <TicTacToe/>
}  else 
    return listOfRestaurants.length === 0 ? (<Shimmer/>) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="search " className="border border-solid border-black"  value={searchText} onChange={(e)=>{
                         setsearchText(e.target.value)
                    }}/>
                    <button  className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                       onClick={()=>{
                        const searchFilteredList = listOfRestaurants.filter(
                            (res)=>res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                        )
                        setfilteredRestaurant(searchFilteredList)
                    }}>Search
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button
                    className="px-4 py-2 bg-gray-100 rounded-lg"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3);
                        setfilteredRestaurant(filteredList);
                    }}> 
                    Top Rated Restaurant
                </button>
                
                <div className="p-2">
                <label>Change User : </label>
                <input className="border border-black p-2"
                   onChange={(e)=>SetUserName(e.target.value)
                }>
                </input>
                </div>
                </div>
                
            </div>

            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/city/delhi/"+restaurant.info.id}>  
                        <RestaurantCard resData={restaurant}/>
                    </Link>
                ))}
            </div>
        </div>
    );



    
};

export default Body;

