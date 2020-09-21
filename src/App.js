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
    <div className="app">
      <h1>Crypto currency price tracker</h1>
      <Search handleChange={handleChange}/>
      <PriceBoard search={search} className='price-board'/>
    </div>
  );
}

export default App;
