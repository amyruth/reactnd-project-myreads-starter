import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Header from './Header';
import Book from './Book';
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import Shelf from './Shelf';
import OpenSearchBtn from './OpenSearchBtn';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
	showSearchPage: false,
	books: []
  }

  componentDidMount() {
	  BooksAPI.getAll()
	  .then((booksfromserver) => {
		  this.setState({books: booksfromserver});
		  console.log(this.state.books);
	  })	
}

  render() {

    return (
      <div className="app">
			
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
			<div className="list-books">
				<Header />

            <div className="list-books-content">
              <div className="shelf-holder">
				  { /*shelf start*/ }
                <Shelf />
				{ /*end shelf 1*/ }

				  { /*shelf start*/ }
                <Shelf />

				{ /*shelf start*/ }
				<Shelf />
				{/* end shelf */}
			  </div> { /*end shelf-holderr*/ }
			  
            </div> { /*end list-books-content */}

			{/* start search button */}
				<OpenSearchBtn />
          </div> //list books end
		 
        )}
      </div> //end app
    )
  }
}

export default BooksApp;
