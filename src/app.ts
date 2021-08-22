import {Invoice} from './classes/invoice.js';
import { ListTemplate } from './classes/list-template.js';
import {Payment} from './classes/payment.js';
import { hasFormatter } from './interfaces/hasFormatter.js';

const docTypeEnum = {
    invoice: 'invoice',
    payment: 'payment'
};

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as  HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit',(e) =>{
    e.preventDefault();

    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber];

    let doc: hasFormatter;
    if(type.value === docTypeEnum.invoice){
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');

});

//ENUM
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
// Generic
const addUID = <T extends {name: string}>(obj: T) =>{
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'Yoshi', age: 40});

console.log(docOne.age);

interface Resource<T>{
    uid: number;
    resourceNameID: number;
    data: T;
}

const docTwo: Resource<string> = {
    uid: 1,
    resourceNameID: ResourceType.PERSON,
    data: 'Rohan'
}

// tuples
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
/* Wrong: tup = [25, 'tuple', false]*/ 