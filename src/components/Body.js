
import { useState, useEffect, useContext, Suspense } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import TicTacToe from "./TicTacToe";
import UserContext from "../utils/UserContext";
import React, {lazy} from "react";
import RestaurantCard from "./RestauranttCard"
// const RestaurantCard = lazy(()=>import("./RestauranttCard"))

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const { loggedInUser, SetUserName } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const onlineStatus = useOnlineStatus();
    console.log(listOfRestaurants)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", { 
            headers: { 
                'x-cors-api-key': 'temp_f87322221c175e9fc2dc965203acc930' 
            } 
        });
            const json = await response.json();
            setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };
    if (onlineStatus === false) {
        return <TicTacToe/>;
    } else if (loading) {
        return <Shimmer />;
    }

    return (
        <div className="p-4">
            <div className="flex flex-col md:flex-row md:justify-center mb-4">
                <div className="flex items-center mb-4 md:mb-0">
                    <input
                        data-testid="searchInput"
                        type="search"
                        className="border border-gray-300 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="   Search restaurants "
                        aria-label="Search restaurants"
                    />
                    <button
                        data-testid="search-button"
                        className="bg-green-300 text-black px-4 py-2 rounded-r-md hover:bg-green-600 transition"
                        onClick={() => {
                            const searchFilteredList = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurant(searchFilteredList);
                        }}>
                        Search
                    </button>
                    {/* <div className="flex items-center">
                        <label className="mr-2">Change User:</label>
                        <input
                            className="border border-gray-300 p-2 rounded-md"
                            onChange={(e) => SetUserName(e.target.value)}
                        />
                    </div> */}
                </div>
                <div className="flex items-center ml-4">
                    <button
                        className="bg-green-300 px-4 py-2 rounded-md hover:bg-green-600 transition mr-4"
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4.3);
                            setFilteredRestaurant(filteredList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredRestaurant.map(restaurant => (
                    <Link key={restaurant.info.id} to={`/city/delhi/${restaurant.info.id}`}>
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
