import React from 'react'
import Search from '../Search/Search'
import './Toolbar.css'

const Toolbar = props => (
    
    <div className="flex-container">
    <a className="toolbar__logo" href="/">Sixify</a>
    <i className="fas fa-angle-left arrowleft"> </i> 
    <i className="fas fa-angle-right arrowright"> </i> 
    <Search />
    <a className="Playlist" href="/">Playlist</a>
    <a className="Profile" href="/">Profile</a>
    <a className="Signup" href="/">Sign up</a>
    <a className="Login" href="/">Login</a>
    </div>
)

export default Toolbar