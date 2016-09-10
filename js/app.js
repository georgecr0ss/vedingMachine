var Quater = (function () {
    function Quater() {
        this.value = .25;
    }
    Object.defineProperty(Quater.prototype, "Value", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Quater.prototype.getImgUrl = function () {
        return "img/Quater.png";
    };
    return Quater;
}());
/// <reference path="./coin.ts" />
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = 0;
        this.acceptCoin = function (coin) {
            _this.paid += coin.value;
            var element = document.getElementById("total");
            element.innerHTML = _this.paid.toString();
        };
    }
    return VendingMachine;
}());
/// <reference path="vendingMachine.ts" />
/// <reference path="typings/knockout.d.ts" />
var machine = new VendingMachine();
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map