import React from 'react'
import Search from '../Search/Search'
import './Toolbar.css'

const Toolbar = props => (
    
  <header className="toolbar">
    <nav className="toolbar__navigation">
    <div className="flex-container">
    <Search />
        <a className="toolbar__logo" href="/">Sixify</a> 
        <a className="toolbar_navigation-item1" href="/">Profile</a>
        <a className="toolbar_navigation-item2" href="/">Help</a>
        <a className="toolbar_navigation-item4" href="/">Sign up</a>
        <a className="toolbar_navigation-item5" href="/">Log In</a>
        <a className="toolbar_navigation-item" href="/">Playlist</a>
        </div>
        </nav>
        </header>
)

export default Toolbar