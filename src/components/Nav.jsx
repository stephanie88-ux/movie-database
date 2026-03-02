import logo from '../film.png';
import SearchBar from './SearchBar';
import { useMovies } from './MovieContext';

function Nav() {
    const { fetchMovies } = useMovies();

    const handleSearchSubmit = (query) => {
        fetchMovies(query);
    };

    return(
        <nav className='flex p-4 m-4 justify-evenly items-center'>
            <img className="w-12" src={logo} alt="logo" />
            <a href="/">home</a> |
            <a href="/SEARCH/">search</a> |
            <a href="/NOTIFICATION/">notification</a> |
            <a href="/PROFILE/">profile</a>
            <SearchBar onSearch={handleSearchSubmit} />
        </nav>

    );
}

export default Nav;