# Front Page Component Structure

```
	App.js
```
- ## Root Div
- ## App Div
	- - ## list-books Div
	- ## Search Bar (hardcoded?)
	- ## list-books-content
		- ## Bookshelf
  		- ## Shelf x 3
			- ## bookshelf-title
			- ## Book x 2
				- ### Bookcover
				- ### Title
				- ### Author
				- ## Shelf changer/options menu x 4
		- ## Open Search

# API Call

```BooksAPI.getAll()``` call this in the App's state object then distribute to the Books (parent to child) 
	
	- assign it to ```this.setState(bookResults)```

# Book Object Properties

{title: "The Linux Command Line", 

subtitle: "A Complete Introduction", 

authors: Array(1), 

publisher: "No Starch Press", 

publishedDate: "2012", …}