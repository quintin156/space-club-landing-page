function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">

        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
          Welcome To
        </h2>

        <h2 className="text-3xl md:text-6xl lg:text-8xl font-black mb-8 uppercase">
          The Space Club
        </h2>

      </main>

      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <p>Built with 💖 by Quintin Latimore</p>

        <div className="flex -mx-6">
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            About Us
          </a> |
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            Privacy
          </a> |
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
