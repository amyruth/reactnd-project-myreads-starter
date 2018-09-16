import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types';

class SearchPage extends Component {
	
	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
					<div className="search-books-input-wrapper">
						{/*
						NOTES: The search from BooksAPI is limited to a particular set of search terms.
						You can find these search terms here:
						https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

						However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
						you don't find a specific author or title. Every search is limited by search terms.
						*/}
						<input type="text" 
						placeholder="Search by title or author" value={this.props.searchQuery}
						onChange={ (e) => this.props.setQuery(e.target.value)} />

					</div>
				</div>
			{/* seems to work with nonesense and empty queries w/o crashing unless I type too fast? */}
			<div className="search-books-results">
				<ol className="books-grid">
					{this.props.searchResults.length > 0 &&
						this.props.searchResults.map( (book) => 
					(
						<li key={book.id}>
							<Book book={book}
							changeShelfHandler={this.props.changeShelfHandler} />
						</li>
					))}
				</ol>
			</div>
          </div>
		);
	}

}
		SearchPage.propTypes = {
			searchResults: PropTypes.array.isRequired
		};

export default SearchPage;