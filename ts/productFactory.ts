/// <reference path="./product.ts" />



class productsFactory {
    static GetProduct(): Product { 
        let random = Math.floor(Math.random()*8);
        // console.log(random)
        switch(random){
            case 0: return new CocaCola();
            case 1: return new Sprite();
            case 2: return new Mars();
            case 3: return new Ruffles();
            case 4: return new Lays();
            case 5: return new MilkyWay();
            case 6: return new Mars();
            case 7: return new MM();
            case 8: return new Gummies();
        }
    }
}