function createBook(title, author, ISBN) {
    const book= {
        title: title,
        author: author,
        ISBN: ISBN,
        isBorrowed: false,
        borrow: function() {
            this.isBorrowed = true;
        },
        returnBook: function() {
            this.isBorrowed = false;
        }
    };
    return book;
}

function createLibrary() {
    return {
        books: [],

        addBook: function(book) {
            this.books.push(book);
        },

        findBookByISBN: function(isbn) {
            for(let book of this.books) {
                if (book.ISBN === isbn) {
                    return book;
                }
            }
            return null;
        },

        borrowBookByISBN: function(isbn) {
            const book = this.findBookByISBN(isbn);
            if (book && !book.isBorrowed) {
                book.borrow();
                console.log(`${book.title} has been borrowed.\n`);
            } else if (book && book.isBorrowed) {
                console.log(`${book.title} is already borrowed.\n`);
            } else {
                console.log("Book not found.\n");
            }
        },

        returnBookByISBN: function(isbn) {
            const book = this.findBookByISBN(isbn);
            if (book && book.isBorrowed) {
                book.returnBook();
                console.log(`${book.title} has been returned.\n`);
            } else if (book && !book.isBorrowed) {
                console.log(`${book.title} was not borrowed.\n`);
            } else {
                console.log("Book not found.\n");
            }
        },

        listAvailableBooks: function() {
            console.log("Available Books:");
            let isThere=false
            for(let book of this.books) {
                if (!book.isBorrowed) {
                    isThere=true;
                    console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.ISBN}`);
                }
            }
            if(!isThere){
                console.log("No available books.");
                return;
            }
            console.log('\n');
        },

        listBorrowedBooks: function() {
            console.log("Borrowed Books:");
            let isThere=false;
            for(let book of this.books) {
                if (book.isBorrowed) {
                    isThere=true;
                    console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.ISBN}`);
                }
            };
            if(!isThere){
                console.log("No borrowed books.");
                return;
            }
            console.log('\n');
        }
    };
}

const myLibrary = createLibrary();

const book1 = createBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
const book2 = createBook("1984", "George Orwell", "9780451524935");
const book3 = createBook("To Kill a Mockingbird", "Harper Lee", "9780061120084");

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

myLibrary.borrowBookByISBN("9780743273565");
myLibrary.listAvailableBooks();
myLibrary.listBorrowedBooks();

myLibrary.returnBookByISBN("9780743273565");
myLibrary.listAvailableBooks();
myLibrary.listBorrowedBooks();
