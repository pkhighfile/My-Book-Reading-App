import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
/*import escapeRegExp from 'escape-string-regexp'*/

class CreateSearch extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookUpdate: PropTypes.func.isRequired,
        onSearch: PropTypes.func.isRequired
    }

    render() {
        const {books, onBookUpdate, onSearch} = this.props

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/">Close</Link>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author"
                             onChange={(event) => onSearch(event.target.value)} />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid"></ol>
                    </div>
                </div>

                <div className="list-books-content">

                    <div className="bookshelf">

                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {books.map((book) => (

                                    <li key={book.id}>
                                        <div className="book">
                                            <div className="book-top">
                                                <div
                                                    className="book-cover"
                                                    style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: `url(${book.imageLinks.thumbnail})`
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
                                            {book
                                                .authors
                                                .map((author) => <div className="book-authors" key={author}>{author}</div>)}
                                        </div>
                                    </li>

                                ))
}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateSearch