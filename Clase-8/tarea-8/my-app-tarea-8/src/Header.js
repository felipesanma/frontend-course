function Header() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">
                Random Users
            </a>
            <ul className='nav-items'>
                <li> <a href="/">Pricing</a></li>
                <li> <a href="/">About</a></li>
                <li> <a href="/">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Header;