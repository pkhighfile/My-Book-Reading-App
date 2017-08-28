import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import ListBooks from './ListBooks'
import CreateSearch from './CreateSearch'

class BooksApp extends React.Component {
    constructor() {
    super();
   this.state  = {
    books: []    
  }
}
  componentWillMount() {
   this.FetchBooks()
  }
  
  FetchBooks = () =>{
    BooksAPI
      .getAll()
      .then((books) => {
        this.setState({books})
      })
  }

  UpdateShelf = (book, shelf) => {
    BooksAPI
      .update(book, shelf)
      .then(()=>{
        this.FetchBooks()
        console.log(this.state)
      })
  } 

  render() {
    return (
      <div className="app">
        <Route
          exact
          path='/'
          render={() => (         
            <ListBooks books={this.state.books} onBookUpdate={this.UpdateShelf}/>         
        )}/>
        <Route
          path='/search'
          render={() => (<CreateSearch 
          fetch={this.FetchBooks}
          books={this.state.books}/>)}
         />
      </div>
    )
  }
}

export default BooksApp
