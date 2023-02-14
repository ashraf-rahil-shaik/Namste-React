import { cards } from "../config";
import RestaurantCard from "./RestaurantCard";
const Body=()=>{
    return(
<>

<div className="search-container">
    <input className="search-input" type="text" placeholder="search" value="kfc" />
<button className="search-btn">search</button>

</div>

        <div className="restaurant-list">
        
{
cards.map((items)=>{
    return <RestaurantCard {...items.data}/>
})
}
          
    
        </div>
        </>
    )
}
export default Body