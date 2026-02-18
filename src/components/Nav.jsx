import logo from '../film.png';

function Nav() {
    return(
        <nav className='flex p-4 m-4 justify-evenly items-center'>
            <img className="w-12" src={logo} alt="logo" />
            <a href="/HOME/">home</a> |
            <a href="/SEARCH/">search</a> |
            <a href="/NOTIFICATION/">notification</a> |
            <a href="/PROFILE/">profile</a>
        </nav>
    );
}

export default Nav;