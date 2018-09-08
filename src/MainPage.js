import React, { Component } from 'react';
import Header from './Header';
import Book from './Book';
import OpenSearchBtn from './OpenSearchBtn';
import SearchPage from './SearchPage';


class MainPage extends Component {
	render() {
	
		return (
			<div className="list-books">
				<Header />
				<div className="list-books-content">

					<div className="shelf-holder">
							<div className="bookshelf">
								<h2 className="bookshelf-title">Currently Reading</h2>
								<div className="bookshelf-books">
									<ol className="books-grid">	
										this.props.books.filter((book) => {
											if (book.shelf === 'currentlyReading') {
												<Book />
											}
										})
									</ol>
								</div>
							</div>

						<div className="bookshelf">
							<h2 className="bookshelf-title">Want to Read</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">	

								</ol>
							</div>
						</div>

						<div className="bookshelf">
							<h2 className="bookshelf-title">Read</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">		
													
								</ol>
							</div>
						</div>
					</div> { /*end shelf-holderr*/ }
				
				</div> { /*end list-books-content */}

				<OpenSearchBtn />
			</div> 
		);
	}
}

export default MainPage;