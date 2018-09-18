import React from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import SearchPage from './Components/SearchPage';
import { Route } from 'react-router-dom';
import Main from './Components/Main';

class BooksApp extends React.Component {
  state = {
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
      <div className='app'>
		
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
