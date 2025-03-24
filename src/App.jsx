import { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="wrapper">
        <header>
          {/* Hero*/}
          <h1>
            Find <span>Movies</span> you will enjoy without the Hassle
          </h1>
        </header>

        {/* Search Component */}
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  );
};

export default App;
