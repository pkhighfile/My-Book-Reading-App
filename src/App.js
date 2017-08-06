import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import ListBooks from './ListBooks'
import CreateSearch from './CreateSearch'

class BooksApp extends React.Component {
  state = {
    books: [],
    sbooks:[]
  }

  componentDidMount() {
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
      }).then(() =>
        this.props.history.push('/')
      )
  }

  BookSearch = (query, maxResult) => {
    BooksAPI
      .search(query, maxResult)
      .then((sbooks) => {
        this.setState({sbooks})
      })
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path='/'
          render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <ListBooks books={this.state.books} onBookUpdate={this.UpdateShelf}/>
          </div>
        )}/>
        <Route
          path='/search'
          render={() => (<CreateSearch
          books={this.state.sbooks}
          onBookUpdate={this.UpdateShelf}
          onSearch={this.BookSearch}/>)}
         />
      </div>
    )
  }
}

export default BooksApp
