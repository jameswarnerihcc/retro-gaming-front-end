"use client"
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { RetroGamingProduct } from "../components/Product";
import Image from 'next/image';
import { use } from 'react'

const defaultProduct = {
    name: "",
    prettyURL: "",
    description: "",
    price: 0,
    imageUrl: "",
    brand: "",
    color: "",
    features: [],
    size: "",
    weight: "",
    availableQuantity: 0,
    condition: "",
    averageCustomerReview: 0
}

export default function ProductPage({params,}: {params: Promise<{ productName: string }>}) {
    const { productName } = use(params);

    const [product, setProduct] = useState<RetroGamingProduct>(defaultProduct);
    
    useEffect(() => {
        getProductByName();
    },[])

    const getProductByName = async () => {
        // REPLACE THIS FUNCTION WITH CALLING YOUR API TO RETRIEVE A SINGLE PRODUCT BY NAME
        const response = await fetch("sample_products.json");

        if(response.ok) {
            const data: RetroGamingProduct[] = await response.json();
            let productFound: RetroGamingProduct = defaultProduct;
            data.map((product) => {
                if(product.prettyURL === productName) {
                    productFound = product;
                }
            });
            setProduct(productFound);
        }
    }

    return (
        <div className="flex flex-col">
            <Header></Header>
            <div className="flex flex-col items-center md:flex-row gap-20 mr-16 ml-16">
                    {product.imageUrl != "" ? (<Image
                    className="rounded-lg"
                    src={product.imageUrl}
                    alt={product.name}
                    width={500}
                    height={500}
                    />): ""}
                    <div className="">
                        <h1 className="text-6xl mb-8">{product.name}</h1>
                        <h2 className="text-4xl">${product.price}</h2>
                        <ul>
                            <li className="text-lg">Average Customer Review: {product.averageCustomerReview}/5</li>
                            <li className="text-lg">Brand: {product.brand}</li>
                            <li className="text-lg">Color: {product.color}</li>
                        </ul>
                    </div>
                    
            </div>
            {/* MORE INFO */}
            <div className="mt-8 mr-16 ml-16">
                <div className="mb-8">
                    <h3 className="text-4xl">Description</h3>
                    <p>{product.description}</p>
                </div>
                <div>
                    <h3 className="text-4xl">Additional Details</h3>
                    <ul className="list-disc ml-16">
                    {product.features.map((feature) => {
                        return <li key={feature}>{feature}</li>
                    })}
                    </ul>
                </div>
            </div>

        </div>
    )
}