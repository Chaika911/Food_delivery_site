import React from "react";
import RestarantCard from "../RestarantCard/RestarantCard";
import Spinner from "../Spinner/Spinner";
import usePageData from "../../custom-hooks/usePageData";

const Restarants = () => {

    const restaurantsList = usePageData('partners')
    return(
        <div className="restarants__cards cards">
            {restaurantsList
            ? restaurantsList.map(restaurant => <RestarantCard key={restaurant.image} {...restaurant}/>)
            : <Spinner />}
        </div>
    )
}
export default Restarants;