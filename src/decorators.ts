import { makeProperty } from "./functions";

export function sealed (s: string) {
    return function (constructor: Function): void {
        console.log(`Sealing the constructor ${s}.`)
        Object.seal(constructor);
        Object.seal(constructor.prototype)
    }
}
export function logger<TFunction extends Function> (target: TFunction): TFunction {
    const newConstructor: Function = function () {
        console.log('Creating new instance');
        console.log(target.name);
        this.age = 30;
    }

    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.printLibrarian = function (): void {
        console.log(`Librarian name:  ${this.name}, Librarian age: ${this.age}`);
    }

    return newConstructor as TFunction;
}

export function writable (isWritable: boolean) {
    return function (target: any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        console.log('writable decorator')
        console.log({target, name, descriptor})
        descriptor.writable = isWritable;
        return descriptor
    }
}

export function timeout(ms: number) {
    return function(target: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            if (window.confirm('Are you sure?')) {
                setTimeout(() => {
                    originalMethod.apply(this, args)
                }, ms);
            }
        }

        return descriptor;
    }
}

export function logParameter (target: any, methodName:string, index: number) {
    const key = `${methodName}_decor_params_indexes`;
    if (Array.isArray(target[key])) {
        target[key].push[index]
    } else {
        target[key] = [index]
    }
}

export function logMethod (target: any, methodName:string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function ( ...args: any[]) {
        const key = `${methodName}_decor_params_indexes`;
        const idxs = target[key];
        idxs.forEach((i: number) => {
            console.log(`Method: ${methodName}, ParamIndex: ${i}, ParamValue: ${args[i]}`)
        });

        return originalMethod.apply(this, args);
    }

    return descriptor;
}

export function format (pref: string = 'Mr./Mrs.') {
    return function (target: any, propertyName: string) {
        makeProperty(target, propertyName, value => `${pref} ${value}`, value => value);
    }
}

export function positiveInteger (target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalSet = descriptor.set;
    descriptor.set = function (value: number) {
        if (value < 1 || !Number.isInteger(value)) {
            throw new Error('Value is negative or float');
        }

        originalSet.call(this, value)
    }

    return descriptor;
}