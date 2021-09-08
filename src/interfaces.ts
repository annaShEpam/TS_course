import { Category } from "./enums";

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

interface DamageLogger {
    (value: string): void;
}


interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

interface Magazine {
    title: 'My Mag',
    publisher: 'Vogue'
}

interface ShelfItem {
    title: string;
}

interface LibMgrCallback {
    (err: Error, title: string[]): void;
}

interface Callback<T> {
    (err: Error, title:T): void;

}

export { Book, DamageLogger as Logger, Person, Author, Librarian, Magazine, ShelfItem, LibMgrCallback, Callback }