import React, { Component } from 'react';
import Header from './Header';
import Book from './Book';
import { Link } from 'react-router-dom';

class Main extends Component {
	render() {
		return (
			<div className='list-books'>

					<Header />

				<div className='list-books-content'>
				<div>

					<div className='bookshelf'>
					<h2 className='bookshelf-title'>Currently Reading</h2>
					<div className='bookshelf-books'>
						<ol className='books-grid'>
							{this.props.books.filter((book) => book.shelf === 'currentlyReading')
							.map((book) => (
								<li key={book.id}>
									<Book 
										book={book} 
										changeShelfHandler={this.props.changeShelfHandler} 
										currentShelf='currentlyReading' 
									/>
								</li>
							))
							}
						</ol>
					</div>
					</div>

					<div className='bookshelf'>
					<h2 className='bookshelf-title'>Want to Read</h2>
					<div className='bookshelf-books'>
						<ol className='books-grid'>
							{this.props.books.filter((book) => book.shelf === 'wantToRead')
								.map((book) => (
									<li key={book.id}>
										<Book 
											book={book} 
											changeShelfHandler={this.props.changeShelfHandler}
											currentShelf='wantToRead' 
										/>
									</li>
								))
								}
						</ol>
					</div>
					</div>

					<div className='bookshelf'>
					<h2 className='bookshelf-title'>Read</h2>
					<div className='bookshelf-books'>
						<ol className='books-grid'>
							{this.props.books.filter((book) => book.shelf === 'read')
								.map((book) => (
									<li key={book.id}>
										<Book 
											book={book} 
											changeShelfHandler={this.props.changeShelfHandler}
											currentShelf='read' 
										/>
									</li>
								))
								}
						
						</ol>
					</div>
					</div>
				</div>
				</div>

				<div className='open-search'>
					<Link to='/searchpage'>
						Add a book
					</Link>
				</div>
			
			</div> //end list-books
		);
	}
}

export default Main;