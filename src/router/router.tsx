import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout";
// import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { ProductsList } from "../components/productList";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <ProductsList /> },
            { path: 'about', element: <About /> }
        ]
    }
])