import React, { useState } from "react";
import "./App.css";
import PriceBoard from "./components/PriceBoard";
import Search from "./components/Search";

function App() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  
  return (
    <div className="App">
      <h2>Crypto price tracker</h2>
      <Search handleChange={handleChange}/>
      <PriceBoard search={search} />
    </div>
  );
}

export default App;
