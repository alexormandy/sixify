import React, { Component } from 'react'
import './Search.css'
<<<<<<< HEAD
=======

>>>>>>> georgi



class Search extends Component {
state = {
  query: '',
}

<<<<<<< HEAD
handleInputChange = () => {
  this.setState({
    query: this.search.value
  })
=======
 render() {
   return ( 
    <div>
     <form>
       <div className="flex-container"></div>
       <input className="Search"
         placeholder="Search for..."
         ref={input => this.Search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
     </form>
     </div>
   
   )
 }
>>>>>>> georgi
}

render() {
  return (
   <div>
    <form>
      <div className="flex-container"></div>
      <input className="Search"
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