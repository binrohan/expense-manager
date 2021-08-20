// classes
class Invoice {    
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('Mario', 'Website work', 300);
const invTwo = new Invoice('Mario', 'University fees', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toForm = document.querySelector('#toForm') as  HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit',(e) =>{
    e.preventDefault();

});