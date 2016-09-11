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
var SodaCategory = (function () {
    function SodaCategory() {
        this.name = "Soda";
    }
    SodaCategory.prototype.getImgUrl = function () {
        return "img/SodaCan.png";
    };
    return SodaCategory;
}());
/// <reference path="./productCategory.ts" />
var CocaCola = (function () {
    function CocaCola() {
        this.name = "Coca-Cola";
        this.price = 2.20;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
/// <reference path="./product.ts" />
var productsFactory = (function () {
    function productsFactory() {
    }
    productsFactory.GetProduct = function () {
        return new CocaCola();
    };
    return productsFactory;
}());
/// <reference path="./coin.ts" /> 
/// <reference path="./product.ts" />
/// <reference path="productFactory.ts" />
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
var Cell = (function () {
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
    return Cell;
}());
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.selectedCell = ko.observable(new Cell(new CocaCola()));
        this.acceptedCoins = [new Quater()];
        this.cells = ko.observableArray([]);
        this.canPay = ko.pureComputed(function () { return _this.paid() -
            _this.selectedCell().product.price >= 0; });
        this.select = function (cell) {
            cell.sold(false);
            _this.selectedCell(cell);
        };
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.value);
        };
        this.pay = function () {
            if (_this.selectedCell().stock() < 1) {
                alert("I'm sorry, we are out of them!");
                return;
            }
            var currentPaid = _this.paid();
            _this.paid(Math.round(((currentPaid -
                _this.selectedCell().product.price) * 100)) / 100);
            var currentStock = _this.selectedCell().stock();
            _this.selectedCell().stock(currentStock - 1);
            _this.selectedCell().sold(true);
        };
        // acceptCoin = (coin: Quater): void => {
        //     this.paid += coin.value
        //     var element = document.getElementById("total")
        //     element.innerHTML = this.paid.toString()
        // }
    }
    Object.defineProperty(VendingMachine.prototype, "size", {
        set: function (givenSize) {
            this.cells([]);
            for (var index = 0; index < givenSize; index++) {
                var product = productsFactory.GetProduct();
                this.cells.push(new Cell(product));
            }
        },
        enumerable: true,
        configurable: true
    });
    return VendingMachine;
}());
/// <reference path="vendingMachine.ts" />
/// <reference path="typings/knockout.d.ts" />
var machine = new VendingMachine;
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map