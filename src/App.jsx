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

        <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-20 w-fit mx-auto mb-8 rounded-full">
          845, 345 members
        </div>

        <form
          action="https://www.getrevue.co/profile/quintin156/add_subscriber"
          method="post"
          target="_blank"
        >
          <div className="flex flex-col md:flex-row justify-center mb-4">
            <input
              className="text-lg md:text-2xl placeholder:text-gray-300 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 rounded-full md:rounded-tr-none md:rounded-br-none mb-4 md:mb-0 outline-none"
              placeholder="e.g. example@gmail.com"
              type="email"
              name="member[email]"
            />

            <input
              type="submit"
              value="Join Today"
              name="member[subscribe]"
              className="bg-purple-500 rounded-full md:rounded-tl-none md:rounded-bl-none text-lg md:text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 cursor-pointer hover:opacity-75 hover:border-2 border-white duration-100"
            />
          </div>
          <div className="opacity-75">
            <i>
              By subscribing, you agree with Revue’s{" "}
              <a
                target="_blank"
                href="https://www.getrevue.co/terms"
                className="hover:opacity-80 duration-150"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                href="https://www.getrevue.co/privacy"
                className="hover:opacity-80 duration-150"
              >
                Privacy Policy
              </a>
              .
            </i>
          </div>
        </form>
      </main>

      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <p>Built with 💖 by Quintin Latimore</p>

        <div className="flex -mx-6">
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            About Us
          </a>{" "}
          |
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            Privacy
          </a>{" "}
          |
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
