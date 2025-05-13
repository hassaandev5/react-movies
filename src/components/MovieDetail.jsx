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
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-96 w-full object-cover md:w-72 md:h-auto"
            src={
              Poster !== "N/A"
                ? Poster
                : "https://placehold.co/350x450?text=No+Poster"
            }
            alt={Title}
          />
        </div>
        <div className="p-6 md:p-8">
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-xs text-indigo-600 font-medium mb-3">
            {Year} • {Rated} • {Runtime}
          </div>
          <h2 className="text-2xl leading-tight font-bold text-gray-900 mb-3">
            {Title}
          </h2>
          <p className="text-gray-600 mb-5 leading-relaxed">{Plot}</p>

          <div className="space-y-3 mb-5">
            <div>
              <span className="text-gray-900 font-medium">Director: </span>
              <span className="text-gray-600">{Director}</span>
            </div>

            <div>
              <span className="text-gray-900 font-medium">Cast: </span>
              <span className="text-gray-600">{Actors}</span>
            </div>

            <div>
              <span className="text-gray-900 font-medium">Genre: </span>
              <span className="text-gray-600">{Genre}</span>
            </div>
          </div>

          <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-50 text-sm">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-gray-700 font-medium">
              {imdbRating}/10 IMDb
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
