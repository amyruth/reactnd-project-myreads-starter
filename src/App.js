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
	shelfChangeClicked: false,
	searchResults: []
  }

	componentDidMount() {
		BooksAPI.getAll()
		.then((books) => {
			this.setState({ books });
		})	
	};

	changeShelfHandler = (book, shelf) => {
		let oldState = this.state.books.map(book => book);
		// console.log(oldState);
		// console.log(book);

		BooksAPI.update(book, shelf).then(result => console.log(result));
		let bookIndex = oldState.findIndex(oldBook => oldBook.id === book.id);
		// console.log(bookIndex);
	
		if(bookIndex !== -1){
			oldState[bookIndex].shelf = shelf;
			this.setState({books: oldState});
			console.log(this.state.books);
			// console.log('state set');
		}else {
			BooksAPI.getAll().then(books => this.setState({books: books}));
			// console.log('getAll ran');
		} 
	};

	setQuery = (query) => {
		this.setState({searchQuery: query});
		this.searchBooks(query);
	};

	searchBooks = (query) => {
		if(query) {
			BooksAPI.search(query)
			.then( (searchResults) => {
				if(searchResults.error) {
					this.setState({searchResults: []})
				}else{
					this.setState({searchResults})
				}
			})
		} 
	};

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
