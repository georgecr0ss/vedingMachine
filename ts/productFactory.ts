 
import  *  as product from "./product";



// class productsFactory {
    export default function GetProduct():product.Product { 
        let random = Math.floor(Math.random()*8);
        // console.log(random)
        switch(random){
            case 0: return new product.CocaCola();
            case 1: return new product.Sprite();
            case 2: return new product.Mars();
            case 3: return new product.Ruffles();
            case 4: return new product.Lays();
            case 5: return new product.MilkyWay();
            case 6: return new product.Mars();
            case 7: return new product.MM();
            case 8: return new product.Gummies();
        }
    }
// }

// export { productsFactory }