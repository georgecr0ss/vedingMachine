// /// <reference path="./coin.ts" /> 
import { Product, Inital as Init } from "./product";
import getVendingProduct from "./productFactory"
/// <reference path="./product.ts" /> 
import * as Coins from './coin';

export enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell { 
    constructor (public product: Product) {

    }

    stock = ko.observable(3);
    sold = ko.observable(false);
}
// var dime = new Dime();
// this.dime.value = 60;

export class VendingMachine { 

    paid = ko.observable(0);
    selectedCell = ko.observable(new Cell(new Init()));
    acceptedCoins: Array<Coins.Coin> =  [new Coins.Dime(), new Coins.Quater(), new Coins.Half(), new Coins.Dollar()]
    cells = ko.observableArray([])
    canPay = ko.pureComputed(() => this.paid() - 
        this.selectedCell().product.price >= 0)

    set size(givenSize: VendingMachineSize) {
        this.cells([])
        for (let index = 0; index < givenSize; index++) {
             let product = getVendingProduct();
             this.cells.push(new Cell(product))   
             console.log(product.imgUrl());       
        }  
    }

    select = (cell: Cell): void => {
        cell.sold(false)
        this.selectedCell(cell);
    }

    acceptCoin = (coin: Coins.Coin): void => {
        let oldTotal = this.paid()
        this.paid(oldTotal + coin.value)
    }

    pay = (): void => {
        if (this.selectedCell().stock() < 1 ) {
            alert("I'm sorry, we are out of them!")
            return
        }
        let currentPaid = this.paid()
        this.paid(Math.round(((currentPaid - 
            this.selectedCell().product.price)*100))/100)
        let currentStock = this.selectedCell().stock()
        this.selectedCell().stock(currentStock -1)
        this.selectedCell().sold(true)
    }
    // acceptCoin = (coin: Quater): void => {
    //     this.paid += coin.value
    //     var element = document.getElementById("total")
    //     element.innerHTML = this.paid.toString()
    // }
}