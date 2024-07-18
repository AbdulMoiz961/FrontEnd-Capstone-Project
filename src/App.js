import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Welcome to My Website</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home">
          <h2>Home</h2>
          <p>This is the home section.</p>
        </section>
        
        <section id="about">
          <h2>About</h2>
          <p>This is the about section.</p>
        </section>

        <section id="services">
          <h2>Services</h2>
          <p>This is the services section.</p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>This is the contact section.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
