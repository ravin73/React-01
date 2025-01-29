
import listObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    let listofRestaurants2 = [
       
    ]
    const [listofRestaurants,setListofRestaurant]=useState(listObj)
    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={() => { 
                    // filter logic here
                    const filteredList=listofRestaurants.filter(
                        (res)=>res.data.avgRating>4
                    )
                    setListofRestaurant(filteredList)
                   
                    
                 }}>Top Rated Restaurant</button>
            </div>
            <div className='resto-container'>
                {listofRestaurants.map((restaurant)=>(
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    )
}
export default Body;