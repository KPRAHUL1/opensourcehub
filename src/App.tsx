import './App.css'

function App() {

  return (
    <>
     <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="p-4 shadow-sm border-b bg-white sticky top-0 z-10">
        <h1 className="text-2xl font-bold">🌐 OpenSourceHub</h1>
      </header>
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">Curated Public APIs</h2>
      </main>
      <footer className="text-center py-4 text-sm text-zinc-500">
        © {new Date().getFullYear()} OpenSourceHub. Built with 
      </footer>
    </div>
    </>
  )
}

export default App
