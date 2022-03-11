import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Contact from './Components/Contact';
import MyWork from './Components/MyWork';

function App() {
  return (
    <>
      <Nav />
      <main>
        <section id="header-img">
            <h2>
                We're Just Getting Started, Buckle Up!
            </h2>
        </section>
        <MyWork />
      </main>
      <Contact />
    </>
  );
}

export default App;
