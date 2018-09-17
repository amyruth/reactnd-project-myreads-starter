import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchPage extends Component {
	//coment
	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to='/' className="close-search">Close</Link>
					<div className="search-books-input-wrapper">
						<input type="text" 
						placeholder="Search by title or author" value={this.props.searchQuery}
						onChange={ (e) => this.props.setQuery(e.target.value)} />

					</div>
				</div>
			
			<div className="search-books-results">
				<ol className="books-grid">
					{this.props.searchQuery !== '' &&
						this.props.searchResults.map( (book) => 
						(
							<li key={book.id}>
								<Book book={book}
								changeShelfHandler={this.props.changeShelfHandler} />
							</li>
						))
					}
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