import React from "react";
import { useParams } from "react-router-dom";
import usePageData from "../../custom-hooks/usePageData";
import Spinner from "../Spinner/Spinner";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {



    const { products } = useParams();

    const productsList = usePageData(products);

    const minPrice = Math.min.apply(null, productsList?.data.map(el => el.price))

    if(!productsList){
        return <Spinner />
    }

    return(
        <section className="menu">
            <div className="menu__heading">
                <h2 className="menu__title restaurant-title">{productsList.partnerName}</h2>
                <div className="card-info">
                    <div className="rating">4.9</div>
                    <div className="price">Від {minPrice} грн</div>
                    <div className="category">{productsList.category}</div>
                </div>
            </div>

            <div className="cards menu__cards">
                {productsList.data.map(foodItem => <ProductCard key={foodItem.id} {...foodItem}/>)}
            </div>
        </section>
    )
}

export default ProductList;