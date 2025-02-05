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

    console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1]);
    

    return (
        <div className="text-center mt-10">
            <h1 className="text-2xl font-bold text-gray-700">{name}</h1>
            <h2 className="text-xl font-medium ">{cuisines.join(", ")} - 
                {costForTwoMessage}</h2>
            {/* <ul>
                {categories.map((item)=>
                <li key={item.itemCards[0].card.info.id}>{item.title} - Rs. {(item.itemCards[0].card.info.price)/100}</li>
                )}
            </ul> */}
        </div>
    )
}
export default RestaurantMenu