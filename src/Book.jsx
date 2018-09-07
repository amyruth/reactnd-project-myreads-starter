import React, { Component } from 'react'
import BooksApp from './App'

class Book extends Component {
	render() {
		return (
			<li>
				<div className='book'>
					<div className='book-top'>
						<div className='book-cover'
						style={{width:{this.props.books.width}
						{height: this.props.books.height}
						{backgroundImage: this.props.books[i].imageLinks.smallThumbnail}
						}}
					</div>
				</div>
			</li>
		);
	}
}

export default Book;

