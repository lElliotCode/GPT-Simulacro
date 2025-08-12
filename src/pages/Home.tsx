import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className="text-center p-4 flex flex-col gap-12">

            <div>
                <h2 className="text-4xl font-bold p-4">Bienvenidos a la Cafetería GPT</h2>
                <p className="p-4 text-2xl">En esta cafetería podrás disfrutar de los mejores cafés del mundo</p>
            </div>
            <div>
                <button className="cursor-pointer border border-green-700 text-black py-2 px-4 rounded-lg hover:bg-green-700 hover:text-white transition-colors text-2xl"><Link to="/products">Ver productos</Link></button>
            </div>
        </div>
    )
}