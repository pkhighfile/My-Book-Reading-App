import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
/*import escapeRegExp from 'escape-string-regexp'*/

class CreateSearch extends Component {
    static propTypes = {       
        onBookUpdate: PropTypes.func.isRequired,
        onSearch: PropTypes.func.isRequired
    }

    render() {
        const {sbooks, onBookUpdate, onSearch} = this.props
       
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/" >Close</Link>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author"
                             onChange={(event) => onSearch(event.target.value)} />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                        {this._checkLength(sbooks, onBookUpdate)}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
    _checkLength(ListBook, onBookUpdate){
        if(ListBook != null && ListBook.length > 1){
            return(  
                ListBook.map((book) => 
                (
                 this._getBooks(book,onBookUpdate)
               ))
            )
        } else {
            return(
                <li>No book found!</li>
            )
        }
          
    }
    _getBooks(book, onBookUpdate){
     return (
      
        <li key={book.id}>
        <div className="book">
        <div className="book-top">
        <div
            className="book-cover"
            style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})`
           }}></div>
          <div className="book-shelf-changer">
           <select
           value={book.shelf}
           onChange={(event) => onBookUpdate(book, event.target.value)}>
           <option value="none" disabled>Move to...</option>
           <option value="currentlyReading">Currently Reading</option>
           <option value="wantToRead">Want to Read</option>
           <option value="read">Read</option>
           <option value="none">None</option>
           </select>
          </div>
         </div>
          <div className="book-title">{book.title}</div>         
         <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
         </div>
        </li>
    )
  }
}

export default CreateSearch