import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookMenu from './BookMenu';

class Book extends Component {

	render() {
		let showThumbnail = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : '';
	
		return (
		
			<div className='book'>
				<div className='book-top'>
					<div className='book-cover' style={{ width: 128, height: 174, backgroundImage: `url(${showThumbnail})`}}></div>

					<BookMenu 
					currentShelf={this.props.currentShelf}
					changeShelfHandler={this.props.changeShelfHandler} book={this.props.book} />
				</div>

				<div className='book-title'>{this.props.book.title}</div>
				<div className='book-authors'>{this.props.book.authors}</div>
			</div>
		
		);
	}
	
	}

	Book.propTypes = {
		authors: PropTypes.array,
		book: PropTypes.object.isRequired,
		title: PropTypes.string
	};

	export default Book;
