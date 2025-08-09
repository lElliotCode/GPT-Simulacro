import { Header } from "./header"
import { Footer } from "./footer"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}