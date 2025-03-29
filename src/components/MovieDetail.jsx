const MovieDetail = ({
  movie: {
    Poster,
    Title,
    Year,
    Rated,
    Runtime,
    Plot,
    Director,
    Actors,
    Genre,
    imdbRating,
  },
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-96 w-full object-cover md:w-64"
            src={
              Poster !== "N/A"
                ? Poster
                : "https://placehold.co/350x450?text=No+Poster"
            }
            alt={Title}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
            {Year} • {Rated} • {Runtime}
          </div>
          <h2 className="block mt-1 text-2xl leading-tight font-bold text-gray-900">
            {Title}
          </h2>
          <p className="mt-2 text-gray-600">{Plot}</p>

          <div className="mt-4">
            <span className="text-gray-700 font-medium">Director: </span>
            <span className="text-gray-600">{Director}</span>
          </div>

          <div className="mt-2">
            <span className="text-gray-700 font-medium">Cast: </span>
            <span className="text-gray-600">{Actors}</span>
          </div>

          <div className="mt-4">
            <span className="text-gray-700 font-medium">Genre: </span>
            <span className="text-gray-600">{Genre}</span>
          </div>

          <div className="mt-4 flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-gray-700">{imdbRating}/10 IMDb</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
