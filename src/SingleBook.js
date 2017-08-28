import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SingleBook extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onBookUpdate: PropTypes.func.isRequired    
  }

  render() {
    const {book, onBookUpdate} = this.props

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
           value={book.shelf ? book.shelf :''}
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

export default SingleBook