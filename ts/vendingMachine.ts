/// <reference path="./coin.ts" />


class VendingMachine {
    private paid = 0;

    acceptCoin = (coin: Quater): void => {
        this.paid += coin.value
        var element = document.getElementById("total")
        element.innerHTML = this.paid.toString()
    }
}