import React, { Component } from 'react';
import Book from './Book';
import Header from './Header';
import Shelf from './Shelf';
import OpenSearchBtn from './OpenSearchBtn';

class MainPage extends Component {
	render() {
		return (
			<div className="list-books">
				<Header />

				<div className="list-books-content">

					<div className="shelf-holder">

						<Shelf shelfName="Currently Reading" />

						<Shelf shelfName="Want to Read" />

						<Shelf shelfName="Read" />
					</div> { /*end shelf-holderr*/ }
				
				</div> { /*end list-books-content */}

				<OpenSearchBtn />
			</div> 
		);
	}
}

export default MainPage;