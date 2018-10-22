import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchPage extends Component {
	
	render() {
		return (
			<div className='search-books'>
				<div className='search-books-bar'>
					<Link to='/' className='close-search'>Close</Link>
					<div className='search-books-input-wrapper'>
						<input type='text' 
						placeholder='Search by title or author' value={this.props.searchQuery}
						onChange={ (e) => this.props.setQuery(e.target.value)} />
					</div>
				</div>
			
			<div className='search-books-results'>
				<ol className='books-grid'>
					{this.props.searchQuery !== '' &&
						this.props.searchResults.map( (searchresult) => {
							let shelf= 'none';
							this.props.books.map(book => (
								book.id === searchresult.id ?
								shelf = book.shelf : ''
							))
							return (
								<li key={searchresult.id}>
									<Book 
									book={searchresult}
									changeShelfHandler={this.props.changeShelfHandler}
									currentShelf={shelf}
									 />
								</li>
							)
						})}
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