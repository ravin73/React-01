import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  
    const [listofRestaurants,setListofRestaurant]=useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.225372&lng=79.0313096&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json=await response.json();
        setListofRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }

    if(listofRestaurants.length===0){
        return <Shimmer/>
    }
    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={() => {
                    // filter logic here
                    const filteredList = listofRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    )
                    setListofRestaurant(filteredList)
                }}>Top Rated Restaurant</button>
            </div>
            <div className='resto-container'>
            {listofRestaurants.map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    )
}
export default Body;