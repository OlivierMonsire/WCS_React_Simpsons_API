import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import QuoteCard from "./components/QuoteCard";
import QuoteList from "./components/QuoteList";

function App() {
  return (
    <div className="App">
        <Navbar />
        <QuoteList />
    </div>
  );
}

export default App;
