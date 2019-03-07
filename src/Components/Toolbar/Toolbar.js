import React from 'react'
import Search from '../Search/Search'
import './Toolbar.css'

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div />
      <div >
        <a className="toolbar__logo" href="/">Sixify</a> 
        <a className="toolbar_navigation-item" href="/">Premium</a>
        <a className="toolbar_navigation-item1" href="/">Help</a>
        <a className="toolbar_navigation-item2" href="/">Download</a>
        </div>
        <div>
        <a className="toolbar_navigation-item3" href="/">Sign up</a>
        <a className="toolbar_navigation-item4" href="/">Log In</a>
        </div>
        <Search />
        <div>
        <a className="toolbar_navigation-item5" href="/">Playlist</a>
        </div> 
        </nav>
        </header>
)

export default Toolbar