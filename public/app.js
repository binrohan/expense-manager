"use strict";
// classes
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('Mario', 'Website work', 300);
var invTwo = new Invoice('Mario', 'University fees', 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
var form = document.querySelector('.new-item-form');
// inputs
var type = document.querySelector('#type');
var toForm = document.querySelector('#toForm');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
});
