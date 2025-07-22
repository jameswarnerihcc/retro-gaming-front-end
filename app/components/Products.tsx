'use client'
import { useEffect, useState } from "react";
import { RetroGamingProduct } from "./Product";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

export default function Products() {

    const [products, setProducts] = useState<RetroGamingProduct[]>([]);

    useEffect(() => {
        getProducts();
    },[])

    const getProducts = async () => {
        // REPLACE THIS FUNCTION WITH CALLING YOUR API
        const response = await fetch("sample_products.json");

        if(response.ok) {
            const data: RetroGamingProduct[] = await response.json();
            setProducts(data);
        }
    }

    const handleSearch = () => {
        // TODO: filter results in state based on keywords in title
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10 md:gap-5 m-8">
                {/* Search, Filter and sort components here first*/}
                <div className="flex justify-center items-center gap-2">
                    <input className="justify-self-center border-2 border-amber-400 rounded-md p-2" type="text" placeholder="Search..."></input>
                    <FontAwesomeIcon onClick={handleSearch} icon={faMagnifyingGlass} size="lg" beat/>
                </div>
               
            </div>
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10 md:gap-5 ml-8 mr-8">
                {/* List of products that match results*/}
                {products.map((retroGamingProduct) => (
                    <ProductCard key={retroGamingProduct.name} name={retroGamingProduct.name} price={retroGamingProduct.price} imageUrl={retroGamingProduct.imageUrl} averageCustomerReview={retroGamingProduct.averageCustomerReview} description={retroGamingProduct.description} brand={retroGamingProduct.brand} color={retroGamingProduct.color} features={retroGamingProduct.features} size={retroGamingProduct.size} weight={retroGamingProduct.weight} availableQuantity={retroGamingProduct.availableQuantity} condition={retroGamingProduct.condition} prettyURL={retroGamingProduct.prettyURL}/>
                ))}
            </div>
        </div>
    )
}