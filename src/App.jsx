import { useState, useEffect } from "react";
import Search from "./components/Search";
import { BiMoviePlay } from "react-icons/bi";
import Spinner from "./components/Spinner";
import MovieDetail from "./components/MovieDetail";
import { useDebounce } from "use-debounce";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_BASE_URL = `http://www.omdbapi.com`;
const API_OPTIONS = {
  method: "GET",
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 2000);
  const [errorMessage, setErrorMessage] = useState("");
  const [movie, setMovie] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovie = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/?t=${searchTerm}&apikey=${API_KEY}&`;
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Failed to fetch the movie");
      }

      const data = await response.json();
      if (data.Response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMovie("");
        return;
      }
      console.log(data);

      setMovie(data || "");
    } catch (error) {
      console.log("Error Fetching the movies");
      setErrorMessage("Couldn't fetch movies please try again");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      fetchMovie();
    } else {
      setMovie("");
      setErrorMessage("");
    }
  }, [debouncedSearchTerm]);

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
      <section className="searched-movies">
        <h1 className="text-3xl">Movies</h1>

        {/* {errorMessage && <p>{errorMessage}</p>} */}
        {isLoading ? (
          <Spinner />
        ) : errorMessage ? (
          <p>{errorMessage}</p>
        ) : movie ? (
          <MovieDetail movie={movie} />
        ) : (
          <p className="text-gray-500">Search for a movie to display details</p>
        )}
      </section>
    </main>
  );
};

export default App;
