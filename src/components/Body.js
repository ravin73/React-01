import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineStatus from "./OfflineStatus";

const Body = () => {

    const [listofRestaurants, setListofRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    // const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.225372&lng=79.0313096&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await response.json();
        setListofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <OfflineStatus />
    }

    return listofRestaurants.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='flex space-x-10 mb-4'>
                <div className="flex space-x-4 ml-4 mt-6 ">
                    <input type="text" className="border border-solid border-gray-400 outline-none rounded-md w-56 px-2" placeholder="Enter the Restaurant Name" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                    <button className="cursor-pointer bg-green-400 rounded-md border p-1 px-3" onClick={() => {
                        const filteredRestaurant = listofRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant)
                    }}>Search</button>
                </div>
                <button className="cursor-pointer bg-orange-400 rounded-md h-12 mt-6 border px-4" onClick={() => {
                    // filter logic here
                    const filteredList = filteredRestaurant.filter(
                        (res) => res.info.avgRating >= 4
                    )
                    setFilteredRestaurant(filteredList)
                }}>Top Rated Restaurant</button>
            </div>
            <div className='grid grid-cols-4 space-x-6 mx-8 space-y-4'>
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id}
                        to={"/restaurants/" + restaurant.info.id}
                        className="no-underline"
                    >   
                    {/* {restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant}/>:<RestaurantCard resData={restaurant} />} */}
                        <RestaurantCard  resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Body;