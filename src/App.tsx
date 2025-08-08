
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";

function App() {

  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <Header />
        <main className="">
          <Main />
          <section className="p-4">
            <h2>Otra sección</h2>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
