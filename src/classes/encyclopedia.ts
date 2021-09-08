import { positiveInteger } from "../decorators";
import { ReferenceItem } from "./referenceItem";

class Encyclopedia extends ReferenceItem {
    private _copies: number = 0
    constructor(title: string, year: number, id: number, public edition: number) {
        super(title, year, id);
    }

    @positiveInteger
    get copies (): number {
        return this._copies;
    }

    set copies (value: number) {
        this._copies = value;
    }

    printItem():void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`)
    }

    printCitation () : void {
        console.log(`${this.title} - ${this.year}`);
    }
}

export default Encyclopedia;