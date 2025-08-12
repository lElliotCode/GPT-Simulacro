import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="bg-gray-200 p-4 flex justify-around items-center flex-1 max-h-[15vh]" aria-label="Header">
          <h1>Cafetería GPT</h1>

          <ul className="flex gap-4 justify-center items-center">
            <li><Link to="/" className="hover:text-gray-700 transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-gray-700 transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-gray-700 transition-colors">About</Link></li>
          </ul>
        </header>
    )
}