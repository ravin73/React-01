import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
    const {resData} = props;  // destructuring props to get restaurant data directly
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,deliveryTime}=resData?.info
    
    return(
        <div className='res-card'>
            <img className='res-logo' alt='restaurant cards' src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <div className='res-info'>
            <h4>{cuisines.join(", ")}</h4>
            <h4> {costForTwo}</h4>
            <h4>{avgRating} star rating</h4>
            <h4>{deliveryTime} minutes</h4>
            </div>
        </div>
    ) 
}

export default RestaurantCard;