import { timeout } from '../decorators';
import * as Interfaces from '../interfaces';

abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    private _publisher: string;

    #id: number;

    static department: string = 'My Department';

    constructor(public title: string, protected year: number, id: number) {
        this.#id = id;
    }

    @timeout(5000)
    printItem ():void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department ${ReferenceItem.department}`);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher (newPublisher: string) {
        this._publisher = newPublisher;
    }

    getId(): number {
        return this.#id;
    }

    abstract printCitation (): void
}

export { ReferenceItem };