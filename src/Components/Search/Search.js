import React, { Component } from 'react'
import './SearchBox.css'



class Search extends Component {
 state = {
   query: '',
 }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

 render() {
   return ( 
    <div className="flex-container">
     <form>
       <input className="SearchBox"
         placeholder="Search for..."
         ref={input => this.Search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
     </form>
     </div>
   
   )
 }
}

export default Search


