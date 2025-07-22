import Link from "next/link";
import { RetroGamingProduct } from "./Product";
import Image from 'next/image';

export default function ProductCard(product: RetroGamingProduct) {
    return (
        <Link href={'/' + product.prettyURL}>
       <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gray-900 p-4 hover:shadow-xl transition-shadow">
            <Image
                className="w-full h-48 object-cover rounded-xl"
                src={product.imageUrl}
                alt={product.name}
                width={500}
                height={500}
            />
            <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-100">{product.name}</h2>
                <p className="text-gray-400 text-sm mt-2">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-amber-300">${product.price.toFixed(2)}</span>
                <button className="bg-amber-400 text-gray-900 font-medium px-4 py-2 rounded-xl hover:bg-amber-300 transition-colors">
                    Add to Cart
                </button>
                </div>
            </div>
        </div>
        </Link>
    )
}