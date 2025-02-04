import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;  // destructuring props to get restaurant data directly
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } = resData?.info

    return (
        <div className='bg-blue-100 rounded-lg w-72 h-[480px] mb-4 hover:scale-95'>
            <img className='rounded-md w-72 h-64' alt='restaurant cards' src={CDN_URL + cloudinaryImageId} />
            <div className="mx-4 p-2">
                <h3 className="text-xl text-teal-800">{name}</h3>
                <div className='mt-6 text-green-600'>
                    <h4>{cuisines.join(", ")}</h4>
                    <h4> {costForTwo}</h4>
                    <h4>{avgRating} star rating</h4>
                    <h4>{sla.deliveryTime} minutes</h4>
                </div>
            </div>
        </div>
    )
}

// Higer Order Components -A Function that takes a component (enhances means adding extra features to it) and returns a component.
// export const withPromotedLabel = (RestaurantCard) => {
//     return (props) => {
//         return (
//             <div>
//                 <label>Promoted</label>
//                 <RestaurantCard  {...props} />
//             </div>
//         )
//     }
// }

export default RestaurantCard;