import { useState } from "react";
import { cards } from "../config";
import RestaurantCard from "./RestaurantCard";

const Body=()=>{
    const [search,setSearch]=useState("")
    return(
<>

<div className="search-container">
    <input className="search-input" type="text" placeholder="search" value={search} 
    //e.target.value => what ever you write in your input
    onChange={(e)=>setSearch(e.target.value)}
    />
<button className="search-btn" >search</button>
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