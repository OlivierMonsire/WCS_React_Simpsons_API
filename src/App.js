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
        <QuoteCard name="Nelson Muntz" avatar="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185" />
    </div>
  );
}

export default App;
