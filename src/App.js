import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import Header from './Components/Header';
import Resume from './Components/Resume';
import { useState } from 'react';

function App() {

const [currentPage, setCurrentPage] = useState('About');  

  function renderPage() {
    if (currentPage === 'About') {
      return <About />
    } else if (currentPage === 'Portfolio') {
      return <Portfolio />
    } else if (currentPage === 'Resume') {
    return <Resume />
  }
  }

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <main>
        {renderPage()}
      </main>
      <Footer />
    </>
  );
}

export default App;
