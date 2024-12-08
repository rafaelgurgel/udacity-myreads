# MyReads: A Book Tracking App

MyReads is a book tracking app that allows users to organize books into three categories: "Currently Reading," "Want to Read," and "Read." Users can search for books, move books between categories, and persist their preferences even after refreshing the page.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

---

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/rafaelgurgel/myreads.git

2. Navigate to the project directory, install the dependencies and start the server:
   ```bash
   cd myreads
   npm install
   npm start

## Features

### Main Page
 #### Bookshelves:
  Displays books categorized into "Currently Reading," "Want to Read," and "Read."
  Each book shows its title, authors, and a book cover image.
  Bookshelves are reusable components.

 #### Moving Books:
  Allows users to move books between shelves using a dropdown menu.
  Books on the main page stay updated when changes are made.
  
 #### Persistence:
  Information persists between page refreshes.

### Search Page
 #### Search Functionality:
  A search input allows users to search for books by title, author, or ISBN.
  Results are displayed in real-time as the user types into the search bar.

 #### Search Behavior:
  Invalid or empty queries return no results.
  Books with missing data (e.g., no thumbnail or author) are displayed correctly.
  Supports searching with multiple words (e.g., "artificial intelligence").
 
 #### Categorization:
  Users can categorize books from the search results into "Currently Reading," "Want to Read," or "Read."
  Changes made on the search page reflect on the main page.
