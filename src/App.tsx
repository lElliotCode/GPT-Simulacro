import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { About } from "./pages/About";
import { ProductsList } from "./components/productList";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductsList />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
