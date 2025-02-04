import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
  
    if (resInfo === null) {
        return <Shimmer />;
    }
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};

    console.log(resInfo);
    

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")} - {
                costForTwoMessage}</h2>
            {/* <ul>
                {categories.map((item)=>
                <li key={item.itemCards[0].card.info.id}>{item.title} - Rs. {(item.itemCards[0].card.info.price)/100}</li>
                )}
            </ul> */}
        </div>
    )
}
export default RestaurantMenu