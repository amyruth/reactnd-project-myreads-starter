import React from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import SearchPage from './Components/SearchPage';
import { Route } from "react-router-dom";
import Main from './Components/Main';

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
		
       <Route path='/searchpage' render={() => (
		   	<SearchPage 
			   searchQuery={this.state.searchQuery} 
			   searchResults={this.state.searchResults}
			   books={this.state.books}
			   changeShelfHandler={this.changeShelfHandler}
			   searchBooks={this.searchBooks}
			   setQuery={this.setQuery}
			   screen={this.state.screen}
		   />
	   )} />
		
        

		<Route exact path='/' render={() => (
				<Main 
					changeShelfHandler={this.changeShelfHandler}
					books={this.state.books}
				/>
		)} />

      </div> //end app
							
    )
  }
}

export default BooksApp;
