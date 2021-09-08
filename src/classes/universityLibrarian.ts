
import { format, logger, logMethod, logParameter, sealed, writable } from '../decorators';
import * as Interfaces from '../interfaces';

// @sealed('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Interfaces.Librarian {
    public department: string;
    @format() public name: string;
    public email: string;

    @logMethod
    assistCustomer (@logParameter custName: string) {
        console.log(`${this.name} is assisting ${custName}`);
    }

    @writable(true)
    assistFaculty (): void {
        console.log('Assisting faculty');
    }

    @writable(false)
    teachCommunity (): void {
        console.log('Teaching community');
    }
}
 export { UniversityLibrarian };