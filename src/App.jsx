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
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
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
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-12 text-center">
          <div className="flex justify-center mb-5">
            <BiMoviePlay className="text-indigo-500 w-16 h-16" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Find <span className="text-indigo-500">Movies</span> You'll Love
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto text-lg mb-8">
            Discover your next favorite film.
          </p>

          {/* Search Component */}
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className="mt-10">
          {isLoading ? (
            <div className="flex justify-center py-10">
              <Spinner />
            </div>
          ) : errorMessage ? (
            <div className="text-center p-8 bg-red-50 rounded-lg border border-red-100">
              <p className="text-red-500">{errorMessage}</p>
            </div>
          ) : movie ? (
            <MovieDetail movie={movie} />
          ) : (
            <div className="text-center p-10 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-500">
                Search for a movie to display details
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
