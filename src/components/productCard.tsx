
type ProductCardProps = {
    name: string;
    price: number;
    image: string;
    description: string;
}

export const ProductCard = ({name, price, image, description}: ProductCardProps) => {
    return (
        <div className="p-4 border border-gray-400 bg-white shadow-md p-6 rounded-md">
            <img src={image}  alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-gray-600 text-sm h-12">{description}</p>
                <div className="mt-3 flex justify-between items-center">
                    <p className="text-gray-600 text-sm">${price}</p>
                    <button aria-label={`Agregar ${name} al carrito`} className=" cursor-pointer border border-gray-700 text-black py-1 px-2 rounded-lg hover:bg-gray-700 hover:text-white transition-colors">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    )
}