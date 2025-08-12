import { products } from "../data/products";
import { ProductCard } from "./productCard";

export const ProductsList = () => {
    return (
        <div className="bg-gray-100 p-4">
            <h2 className="p-4 text-center text-2xl font-bold">Todos nuestros productos disponibles</h2>
            <div className="flex flex-col gap-2 p-5 border border-gray-400 bg-white shadow-md p-6 rounded-md">
                <h3 className="text-lg font-bold mb-4">Menú</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map(product => (
                        <ProductCard 
                        key={product.id} 
                        name={product.name} 
                        price={product.price} 
                        image={product.image} 
                        description={product.description}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}