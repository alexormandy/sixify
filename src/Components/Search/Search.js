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


  <div>
      <h1 className="fas fa-angle-left"> </h1> 
      <h1 className="fas fa-angle-right"> </h1> 
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


