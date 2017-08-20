## Welcome to MyReads App and usage instructions 

This is My-Book-Reading-App. Where you able to track your book status. There are 3 section. 
1. CurrentReading :  In this section you able to add / bookmark those books that you're reading now.
2. Want-To-Read : In this section you able to add/bookmark those books that you want to read at later stage. 
3. Read : In this section you able to add/bookmark those books that you already read. 
> There is a add button that redirect you to search page where you can perform search for book and you can move these book to in sections/bookmark.

## Installation

To run this app in your local machine, you need to download or clone this repo in your local, if you download then you have to extract it from the zip and then you have to install node.js in local machine. After navigate to program from the start menu and find the node js command line interface and run it after that you have to locate your working dir by using following commands
```
|-- cd "path" -- at the place of path variable, you have to pass floder path where you extracted the zip file.
|-- npm install -- this line install all required packages to run this app successfully
|-- npm start  -- this line start the npm webapp for you and open your web browser with localhost:3000
```

## What You're Getting
```
+--public/    
 |-- index.html - DO NOT MODIFY
 |-- favicon.ico - React Icon, You may change if you wish.
+-- src/
 +-- icons/ - Helpful images for your app. Use at your discretion.
  |-- add.svg
  |-- arrow-back.svg
  |-- arrow-drop-down.svg
 |-- App.js - This is the root of your app. Contains static HTML right now.
 |-- App.css - Styles for your app. Feel free to customize this as you desire.
 |-- App.test.js - Used for testing. Provided with Create React App. 
 |--CreateSearch.js -Used for Search books and add in your reading bookmark/section
 |--ListBooks.js - Used for render the my reading app frontend and display all books in your bookmarks
 Testing is encouraged, but not required.
 |-- BooksAPI.js - A JavaScript API for the provided Udacity backend. 
 Instructions for the methods are below.
 |-- index.js - You should not need to modify this file. It is used for DOM rendering only.
 |-- index.css - Global styles. You probably won't need to change anything here.
|-- .gitignore 
|-- CONTRIBUTING.MD - Information about contributing to this repo. 
TL;DR - Fork and clone your own version of this to use it.
|-- README.MD - This README file.
|-- SEARCH_TERMS.md - The whitelisted short collection of available search terms 
for you to use with your app.
|-- package.json - npm package manager file. It's unlikely that you'll need to modify this.
```
 

## Backend Server details for developers

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 

 

 
## Contributing

 
