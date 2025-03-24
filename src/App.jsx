import { useState, useEffect } from "react";
import Search from "./components/Search";
import { BiMoviePlay } from "react-icons/bi";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8 text-center">
          {/* Hero Icon */}
          <div className="flex justify-center mb-4">
            <BiMoviePlay className="text-indigo-600 w-20 h-20" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Find <span className="text-indigo-600">Movies</span> you will enjoy
            without the Hassle
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover your next favorite film .
          </p>
        </header>

        {/* Search Component */}
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <h2>Search Term: {searchTerm}</h2>
    </main>
  );
};

export default App;
