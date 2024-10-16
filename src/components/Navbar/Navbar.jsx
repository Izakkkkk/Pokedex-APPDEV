import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
        <header className="header">
            <a href="/" className='logo'>Regions</a>
            <nav className='navbar'>
                <a href="/">Hoenn</a>
                <a href="/">Johto</a>
                <a href="/">Kanto</a>
                <a href="/">Sinnoh</a>
                <a href="/">Hisui</a>
                <a href="/">Unova</a>
                <a href="/">Kalos</a>
                <a href="/">Alola</a>
                <a href="/">Galar</a>
                <a href="/">Paldea</a>

            </nav>
        </header>
        </>
    
    )
}

export default Navbar;