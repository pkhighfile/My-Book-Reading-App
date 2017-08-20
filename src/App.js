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
    books: [],
    sbooks: []
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
      .then(book => {
        this.setState(state => ({
          books: state
            .books
            .concat([book])
        }))
      }).then(()=>{
        this.FetchBooks()
      })
  }

  BookSearch = (query, maxResult) => {
    if(query !== ''){
    BooksAPI
      .search(query, maxResult)
      .then((sbooks) => {
        if(sbooks !== 'undefined')
          {
           this.setState({sbooks})
          }     
      })
  }
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
          sbooks={this.state.sbooks}
          onBookUpdate={this.UpdateShelf}
          onSearch={this.BookSearch}/>)}
         />
      </div>
    )
  }
}

export default BooksApp
