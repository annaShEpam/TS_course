/* eslint-disable no-redeclare */
import {Category} from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces'
import {UL, ReferenceItem, Library, Shelf } from './classes'
import {PersonBook, BookRequiredFields, СreateCustomerFunctionType } from './types'
import {
    getAllBooks,
    logFirstAvailable,
    getBookTitlesByCategory,
    logBookTitles,
    getBookAuthorByIndex,
    calcTotalPages,
    createCustomerID,
    createCustomer,
    getBookAuthorById,
    getBookById,
    checkoutBooks,
    getTitles,
    assertStringValue,
    bookTitleTransform,
    printBook,
    getProperty,
    printRefBook,
    purge,
    getBooksByCategory,
    logCategorySearch,
    getBooksByCategoryPromise,
    logSearchResults,
} from './functions'
import RefBook from './classes/encyclopedia'
import Encyclopedia from './classes/encyclopedia';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ----------------------------------------------------------
// Task 02.01. Basic Types

// type Book = {
//     readonly id: number,
//     readonly title: string,
//     readonly author: string,
//     readonly available: boolean,
//     readonly category: Category,
// }

// logFirstAvailable();

// const JSBookTitles = getBookTitlesByCategory(Category.Javascript);
// logBookTitles(JSBookTitles);

// // ----------------------------------------------------
// // 03. Functions

// const myID = createCustomerID('Ann', 10);
// console.log({myID})

// let idGenerator: (string, number) => string

// idGenerator = createCustomerID

// console.log(idGenerator('Vasya', 2));

// createCustomer('Ann');
// createCustomer('Ann', 30);
// createCustomer('Ann', 30, 'Burgas');

// console.log(getBookAuthorById(1))

// const myBooks = checkoutBooks('Ann', 1, 2, 4)

// console.log({myBooks})

// const checkedOutBooks = getTitles(false)
// console.log({checkedOutBooks})

// bookTitleTransform('TYpescript')
// bookTitleTransform(1)

// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: (reason) => {
//         console.log(`Damaged: ${reason}`)
//     }
// }

// printBook(myBook)
// myBook.markDamaged('missing back cover')


// let logDamage: Logger;

// logDamage = (str: string) => {console.log(str)}

// logDamage('damage')

// const favoriteAuthor: Author = {
//     name: 'Ann',
//     email: 'example@mail.com',
//     numBooksPublished: 10,
// }

// const favoriteLibrarian: Librarian = {
//     name: 'Ann',
//     email: 'example@mail.com',
//     department: 'qwe',
//     assistCustomer: (custName) => console.log(`Customer: ${custName}`)
// }

// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log(offer.magazine)
// console.log(offer.magazine?.getTitle())
// console.log(offer.book?.getTitle?.())
// console.log(offer.book?.authors?.[0])

// getProperty(myBook, 'markDamaged');
// getProperty(myBook, 'title');
// getProperty(myBook, 'isbn');


// --------------------------------------------------------------------------
// Classes

// const ref = new ReferenceItem('Book title', 2017, 1);
// ref.printItem();

// ref.publisher = 'test publisher'
// console.log(ref.publisher)
// console.log(ref.getId())

// const refBook = new RefBook('My encyclopedia', 2011, 3, 10);
// refBook.printItem()
// refBook.printCitation()
// printRefBook(refBook)
// const favoriteLibrarian2 = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian2)

// favoriteLibrarian2.assistCustomer('Olya');


// const pb: PersonBook = {
//     name: 'Ann',
//     email: 'ann@ann.com',
//     id: 1,
//     title: 'Master and Margarita',
//     author: 'Bulgakov',
//     available: true,
//     category: Category.CSS,
// }
/// ----------------------------------------------
// // Imports

// const flag = true;

// if (flag) {
//     const classes = await import('./classes');
//     const reader = new classes.Reader('myReader', []);
//     console.log({reader})
// }

// const lib: Library = {
//     id: 10,
//     name: 'Some library',
//     address: 'Lenina str.12'
// }

// console.log({lib})

// -----------------------------------------
// Generics
const softwareBooks = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// console.log(purge(softwareBooks));
// console.log(purge([1,2,34,444]));

// const bookShelf = new Shelf()
// softwareBooks.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst());

// const magazines = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazinesShelf = new Shelf()

// magazines.forEach(mag => magazinesShelf.add(mag));

// magazinesShelf.printTitles()

// console.log(magazinesShelf.find('Five Points'))

// const bookRequired:BookRequiredFields = {
//     id: 1,
//     title: 'Mister Mercedes',
//     author: 'Steven King',
//     available: true,
//     category: Category.Angular,
//     pages: 300,
//     markDamaged: () => {}
// }

// const args: Parameters<СreateCustomerFunctionType> = ['Anna']
// createCustomer(...args);

// // Task 08.01.

// const obj = new UL.UniversityLibrarian()
// console.log(obj)
// UL.UniversityLibrarian['a'] = 1

// // Task 08.02.
//  const fLibrarian = new UL.UniversityLibrarian();
//  fLibrarian.name = 'Anna'
//  fLibrarian['printLibrarian']()

 // Task 08.03.
//  const obj = new UL.UniversityLibrarian()
//  console.log(obj)
//  obj.assistFaculty = null;
//  obj.teachCommunity = null

 // Task 08.04
//  const enc = new Encyclopedia('Encyclopedia of JS', 2010, 1, 10)
//  enc.printItem()

 // Task 08.05
const obj = new UL.UniversityLibrarian()
console.log(obj)
obj.name = 'Vasya'
obj.assistCustomer('Anna')
console.log(obj.name)

//Task 08.07

 const enc = new Encyclopedia('Encyclopedia of JS', 2010, 1, 10)

 enc.copies = 10;
 console.log({enc})

 // Task 09.01
//  console.log('calling getBooksByCategory')
//  getBooksByCategory(Category.Javascript, logCategorySearch);
//  console.log('getBooksByCategory called')
//  console.log('calling getBooksByCategory')
//  getBooksByCategory(Category.Software, logCategorySearch);
//  console.log('getBooksByCategory called')
// Task 09.02
// console.log('begin')
// getBooksByCategoryPromise(Category.Javascript)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(numberOfBooks => {
//         console.log(numberOfBooks)
//     })
//     .catch(error => console.error(error))
//     .finally(() => console.log('Complete'));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(error => console.error(error))
//     .finally(() => console.log('Complete'));
// console.log('end')
// Task 09.03
console.log('start')
logSearchResults(Category.Software)
console.log('end')