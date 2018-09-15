import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookMenu extends Component {

	render() {
	
		return (
			<div className="book-shelf-changer">

			<select onChange={ (e) => this.props.changeShelfHandler(this.props.book, e.target.value)}
			value={this.props.shelf} >
			
				<option value="move" disabled>Move to...</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
				</select>
					
			</div>
		);
	}
}

BookMenu.propTypes = {
	value: PropTypes.string,
	changeShelfHandler: PropTypes.func
}

export default BookMenu;