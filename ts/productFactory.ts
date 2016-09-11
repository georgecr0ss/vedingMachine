/// <reference path="./product.ts" />



class productsFactory {
    static GetProduct(): CocaCola {
        return new CocaCola();
    }
}