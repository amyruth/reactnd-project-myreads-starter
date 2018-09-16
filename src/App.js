import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import * as BooksAPI from './BooksAPI';
import Header from './Components/Header';
import Book from './Components/Book';
import SearchPage from './Components/SearchPage';


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
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
	  BooksAPI.update(book, shelf)
	  .then(() => BooksAPI.getAll())
	  .then(books => this.setState({books}))	
  }

//   TODO: Fix error on empty search
  searchBooks = (query) => {
	  console.log(query);
	  this.setState({searchQuery: query});
	  BooksAPI.search(query)
	  .then( (books) => {
		  console.log(books);
		  this.setState({searchResults: books})
	  })
  }

  render() {
	
    return (
      <div className="app">

        {this.state.showSearchPage ? (
			<SearchPage 
			searchQuery={this.state.searchQuery} 
			searchBooks={this.searchBooks}
			searchResults={this.state.searchResults}
			books={this.state.books} />
        ) : (
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
             	 <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>

			
          </div> //end list-books
        )}
      </div> //end app
    )
  }
}

export default BooksApp
