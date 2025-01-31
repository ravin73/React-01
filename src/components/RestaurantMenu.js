import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.225372&lng=79.0313096&restaurantId=649491&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json.data.cards[3]);
        setResInfo(json.data)
    }

    // const {name,cuisines,
    //     costForTwoMessage
    //     }=resInfo?.cards?.[2]?.card.card.info;
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info || {};
    // const {title}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

    // console.log(title);
    

    return resInfo === null ? <Shimmer /> : (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")} - {
costForTwoMessage}</h2>
            <ul>
                <li>Burger</li>
                <li>Pasta</li>
                <li>mocha</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu