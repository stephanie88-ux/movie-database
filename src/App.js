import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import Nav from './components/Nav';

function App() {
  return (
    <div className="container mx-auto px-4">
      <header>
        <Nav/>
      </header>
      <MovieList/>
    </div>
  );
}

export default App;
