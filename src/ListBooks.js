import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import SingleBook from './SingleBook';


class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onBookUpdate: PropTypes.func.isRequired
  }

  render() {
    const {books, onBookUpdate} = this.props

    return (
      <div>
       <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
        <div className="list-books-content">

        {this._getBooks(books, onBookUpdate, "currentlyReading", "Currently Reading")  }

        {this._getBooks(books, onBookUpdate, "wantToRead", "Want to Read")  }

        {this._getBooks(books, onBookUpdate, "read", "Read")  }
         
          </div>
        </div>
       
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>   
     </div>
    )
  }
  _getBooks(books, onBookUpdate, shelf, title){
     return (
      
          <div className="bookshelf">
              <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.filter((book) => book.shelf === shelf).map((book) => (
                  <SingleBook key={book.id} book={book} onBookUpdate={onBookUpdate}/>
                  ))
                 }
                </ol>
              </div>
            </div>
    )
  }
  
}

export default ListBooks