import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import './App.css';

function App() {

const [pages] = useState([
  {
    name: 'about',
    name: 'portfolio',
    name: 'contact'
  }
]);

const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Nav 
        pages={pages} 
        setState={setCurrentPage} 
        getState={currentPage} 
      />
      
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
