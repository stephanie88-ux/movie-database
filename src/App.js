import Logo from './film.png';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Nav from './components/Nav';
import { MovieProvider } from './components/MovieContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
      <div className="container mx-auto px-4">
        <header>
          <Nav/>
        </header>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
    </MovieProvider>
  );
}

export default App;