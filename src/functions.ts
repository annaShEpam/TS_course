import RefBook from './classes/encyclopedia'
import {Book, Callback, LibMgrCallback} from './interfaces'
import {BookProperties, BookOrUndefined} from './types'
import {Category} from './enums'

function getAllBooks (): readonly Book[] {
    const books = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.Javascript},
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.Javascript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.Javascript }
    ] as const

    return books;
}

function logFirstAvailable(books = getAllBooks()): void {
    console.log('Amount of books:', books.length);
    console.log('First available', books.find(book => (book.available)));
}
function getBookTitlesByCategory(category = Category.Javascript): string[] {
    const books = getAllBooks()
    return books.filter(book => (book.category === category)).map(b => b.title);
}

function logBookTitles (titles: string[]): void {
    titles.forEach(title => console.log(title))
}

function getBookAuthorByIndex (idx: number): [title: string, author: string] {
    const books = getAllBooks();
    return [books[idx].title, books[idx].author]
}

function calcTotalPages (): bigint {
    const books = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    return books.reduce((acc, val) => {
        return acc + BigInt(val.books)
    }, BigInt(0))
}

function createCustomerID (name: string, id: number): string {
    return name + id;
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`${name} ${age && age + 'y.o'} ${city}`)
}
function getBookAuthorById(id: number): string{
    return getAllBooks().find(book => (book.id === id))?.author
}

function getBookById(id: number): BookOrUndefined {
    return getAllBooks().find(book => (book.id === id))
}

function checkoutBooks (customer: string, ...bookIDs: number[] ): string[] {
    const books = getAllBooks();
    console.log('Customer: ' + customer)
    return bookIDs.filter(bookId => books[bookId]?.available).map(id => getBookById(id).title)
}


function getTitles(author: string): Book []
function getTitles(available: boolean): Book []
function getTitles(id: number, available: boolean): Book []
function getTitles(...args: any) {
    const allBooks = getAllBooks()

    if (args.length === 1 && typeof args[0] === 'string') {
        return allBooks.filter(book => (book.author === args[0]))
    }

    if (args.length === 1 && typeof args[0] === 'boolean') {
        return allBooks.filter(book => (book.available === args[0]))
    }

    if (args.length ===2) {
        return allBooks.filter(book => (book.id === args[0] && book.available === args[1]))
    }
    return []
}

function assertStringValue(val: any): asserts val is string {
    if (typeof val !== "string") {
        throw new TypeError("value should have been a string");
      }
}

function bookTitleTransform(title: any) {
    assertStringValue(title)
    return title.split('').reverse().join('')
}

function printBook(book: Book) :void {
    console.log(`${book.title} by ${book.author}`)
}

function getProperty <TObject, TKey extends keyof TObject>(book: TObject, property: TKey): TObject[TKey] | string {
    const prop = book[property]
    if (typeof prop === 'function') return prop.name;
    return prop;
}

function assertRefBookInstance (condition: any): asserts condition {
    if (!condition) {
        throw new TypeError('Its not an instance of RefBook')
    }
}

function printRefBook (data:any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem()
}

function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2)
}

function makeProperty<T>(
    prototype: any,
    propertyName: string,
    getTransformer: (value: any) => T,
    setTransformer: (value: any) => T
  ) {
    const values = new Map<any, T>();

    Object.defineProperty(prototype, propertyName, {
      set(firstValue: any) {
        Object.defineProperty(this, propertyName, {
          get() {
            if (getTransformer) {
              return getTransformer(values.get(this));
            } else {
              values.get(this);
            }
          },
          set(value: any) {
            if (setTransformer) {
              values.set(this, setTransformer(value));
            } else {
              values.set(this, value);
            }
          },
          enumerable: true
        });
        this[propertyName] = firstValue;
      },
      enumerable: true,
      configurable: true
    });
}

function getBooksByCategory(category: Category, callback: Callback<string[]>): void {
    setTimeout(() => {
        try {
            const books = getBookTitlesByCategory(category);
            if (books.length) callback(null, books);
            throw new Error('No books found.');
        } catch (error) {
            callback(error, null);
        }
    }, 2000);
}

function logCategorySearch (error: Error, titles: string[]): void {
    if (error) {
        console.log(error);
    } else {
        console.log(titles)
    }
}

function getBooksByCategoryPromise (category: Category): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const books = getBookTitlesByCategory(category);
            if (books.length) resolve(books);
            reject('No books found.');
        }, 2000);
    })
}

async function logSearchResults (category: Category): Promise<void> {
    try {
        const bookTitles = await getBooksByCategoryPromise(category);
        console.log(bookTitles)
    } catch (error) {
        console.error(error)
    }
}

export {
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
    makeProperty,
    getBooksByCategory,
    logCategorySearch,
    getBooksByCategoryPromise,
    logSearchResults,
}