import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import SingleBook from './SingleBook';

class CreateSearch extends Component {
    constructor() {
        super();
        this.state = {
            sbooks: [],
            query: ''
        }
    }

    static propTypes = {
        fetch: PropTypes.func.isRequired       
    }

    SearchUpdateShelf = (book, shelf) => {
        BooksAPI
            .update(book, shelf)
            .then(() => {
                this.props.fetch()
                this.BookSearch(this.state.query)
            })
    }

    BookSearch = (query, maxResult) => {
        if (query !== '') {
            BooksAPI
                .search(query, maxResult)
                .then(
                    this.setState({query: query.trim()}),
                                   
                )   
                .then((sbooks) => {
                    if (sbooks !== 'undefined') {
                        this.setState({sbooks})
                    }
                })          
        }
    }

    FindBook  = (value) => {
        let abook = this.state.sbooks.filter(x => x.id === value.id)       
        return abook.length > 0
    }

    FindBookNot  = (value, arr) => {
        let bbook = arr.filter(x => x.id === value.id)       
        return bbook.length === 0
    }
    

 render() {           
        const{query, sbooks} = this.state
        let showingBooks 
        let filterBooks
        let filterSearchBooks
        if(sbooks.length !== 0)
        {
            filterBooks = this.props.books.filter(this.FindBook)
            filterSearchBooks = sbooks.filter((x) => this.FindBookNot(x, filterBooks))            
            showingBooks = filterBooks.concat(filterSearchBooks)     
        }else{
            showingBooks = []
        }

            return (
                <div>
                    <div className="search-books">
                        <div className="search-books-bar">
                            <Link className="close-search" to="/">Close</Link>
                            <div className="search-books-input-wrapper">
                                <input
                                    type="text"
                                    placeholder="Search by title or author"
                                    value={query}
                                    onChange={(event) => this.BookSearch(event.target.value)}/>
                            </div>
                        </div>
                        <div className="search-books-results">
                            <ol className="books-grid">
                                {showingBooks.map((book) => (
                                <SingleBook
                                    key={book.id}
                                    book={book}
                                    onBookUpdate={this.SearchUpdateShelf} />
                                ))
                                }
                            </ol>
                        </div>
                    </div>
                </div>
            )
        }

    }

    export default CreateSearch