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
  }

  componentDidMount() {
	BooksAPI.getAll()
	.then((books) => {
		this.setState({ books });
	})	
  }

  changeShelfHandler(book, shelf) {
	BooksAPI.update(book, shelf);
	BooksAPI.getAll()
	.then((books) => {
		this.setState({books});
	});
  }

  render() {

    return (
      <div className="app">

        {this.state.showSearchPage ? (
			<SearchPage />
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
