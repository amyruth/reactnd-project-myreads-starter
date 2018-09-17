import React from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import Header from './Components/Header';
import Book from './Components/Book';
import SearchPage from './Components/SearchPage';
import { Link } from 'react-router-dom';
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
	screen: 'shelf', //or search
	showSearchPage: false,
	books: [],
	searchQuery: '',
	searchResults: []
  }

  componentDidMount() {
	BooksAPI.getAll()
	.then((books) => {
		this.setState({ books });
	})	
  }

// Note to self:  I had this written as a regular function and received setState is not a function errors but it would still work. Thank you Forrest in the Slack room for telling me to make this an arrow function. I guess it keeps this in the right conttext? 

  changeShelfHandler = (book, shelf)=> {
	  BooksAPI.update(book, shelf);
	  BooksAPI.getAll().then(books => this.setState({books}))	
  }

	setQuery = (query) => {
		this.setState({searchQuery: query});
		this.searchBooks(query);
	}

	searchBooks = (query) => {
		if(query) {
			BooksAPI.search(query)
			.then( (searchResults) => {
				if(searchResults.error) {
					console.log(searchResults);
					this.setState({searchResults: []})
				}else{
				console.log(searchResults);
				this.setState({searchResults})
				}
			})
		} 
	}

  

  render() {
	
    return (
      <div className="app">
		
        {this.state.screen === 'search' && (
			<SearchPage 
			searchQuery={this.state.searchQuery} 
			searchResults={this.state.searchResults}
			books={this.state.books}
			changeShelfHandler={this.changeShelfHandler}
			searchBooks={this.searchBooks}
			setQuery={this.setQuery} 
			/>
        )} 

		{this.state.screen === 'shelf' && (

			<div className="list-books">

				{/* start header */}
            	<Header />

            <div className="list-books-content">
              <div>
					  {/* start bookshelf */}

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
						{this.state.books.filter((book) => book.shelf === 'currentlyReading')
						.map((book) => (
							<li key={book.id}>
								<Book book={book} changeShelfHandler={this.changeShelfHandler} />
							</li>
						))
						}
                    </ol>
                  </div>
                </div>



                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
						{this.state.books.filter((book) => book.shelf === 'wantToRead')
							.map((book) => (
								<li key={book.id}>
									<Book book={book} changeShelfHandler={this.changeShelfHandler} />
								</li>
							))
							}
                    </ol>
                  </div>
                </div>



                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
						{this.state.books.filter((book) => book.shelf === 'read')
							.map((book) => (
								<li key={book.id}>
									<Book book={book} changeShelfHandler={this.changeShelfHandler} />
								</li>
							))
							}
                      
                    </ol>
                  </div>
                </div>
              </div>
            </div>


            <div className="open-search">
				  <Link to='/search'>
				  	Add a book
				  </Link>
            </div>

			
          </div> //end list-books
        )}
      </div> //end app
							
    );
  }
}

export default BooksApp
