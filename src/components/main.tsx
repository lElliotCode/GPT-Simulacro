export const Main = () => {
    return (
        <main className="bg-gray-100 p-4">
            <h2 className="p-4 text-center">Sección para ordernar y/o ver los cafés disponibles</h2>
            <div className="flex flex-col gap-2 p-5 border border-gray-400 bg-white shadow-md p-6 rounded-md">
                <h3 className="text-lg font-bold mb-4">Lista de cafés</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Café americano</li>
                    <li>Café capuchino</li>
                    <li>Café latte</li>
                    <li>Café mocha</li>
                    <li>Café macchiato</li>
                </ul>
            </div>
        </main>
    )
}