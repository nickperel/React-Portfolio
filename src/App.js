import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import Header from './Components/Header';
import ContactForm from './Components/Contact';
import Resume from './Components/Resume';
import { useState } from 'react';

function App() {

const [currentPage, setCurrentPage] = useState('About');  

  function renderPage() {
    if (currentPage === 'About') {
      return <About />
    } else if (currentPage === 'Portfolio') {
      return <Portfolio />
    } else if (currentPage === 'Contact') {
      return <ContactForm />
    } else if (currentPage === 'Resume') {
    return <Resume />
  }
  }

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <main>
        <section id="header-img">
            <h2>
                We're Just Getting Started, Buckle Up!
            </h2>
        </section>
        {renderPage()}
      </main>
      <Footer />
    </>
  );
}

export default App;
