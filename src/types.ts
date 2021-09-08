import { createCustomer, getBooksByCategoryPromise } from './functions';
import {Book, Person, Author} from './interfaces';

type BookProperties = keyof Book;
type PersonBook = Person & Book;
type BookOrUndefined = Book | undefined;
type BookRequiredFields = Required<Book>
type UpdatedBook = Partial<Book>
type AuthorWoEmail = Omit<Author, 'email'>
type СreateCustomerFunctionType = typeof createCustomer
type fn = (arg1: string, arg2: number, arg3: boolean) => symbol
type Param1<T> = T extends (arg1: infer R, arg2: number, arg3: boolean) => symbol ? R : never
type Param2<T> = T extends (arg1: string, arg2: infer R, arg3: boolean) => symbol ? R : never
type Param3<T> = T extends (arg1: string, arg2: number, arg3: infer R) => symbol ? R : never
type P1 = Param1<fn>
type P2 = Param2<fn>
type P3 = Param3<fn>

type Unpromisify<T> = T extends Promise<infer R> ? R : never;

export type rt = ReturnType<typeof getBooksByCategoryPromise>;
export type PromiseValueType = Unpromisify<rt>

export {BookOrUndefined, BookProperties, PersonBook, BookRequiredFields, UpdatedBook, СreateCustomerFunctionType}