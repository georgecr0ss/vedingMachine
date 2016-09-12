/// <reference path="./productCategory.ts" />
import * as ProductsCategory from './productCategory'
let pathImg = "img/";

interface Product {    
    name: string
    price: number
    category?: ProductsCategory.ProductCategory
    imgUrl( path ?: string)
}

class Inital implements Product {
    name = "Please select a product"
    price = 0 
    imgUrl(){

    }
}

class CocaCola implements Product {
    name = "Coca-Cola" 
    price = 2.3
    category = new ProductsCategory.SodaCategory() 
    // imgUrl = "drinks/SodaCan.png"
    imgUrl(){
        return pathImg + "drinks/SodaCan.png"
    }
    // image = new ProductsCategory.SodaCategory().getIt("drinks/SodaCan.png") 
}

class Sprite implements Product {
    name = "Sprite" 
    price = 2.3
    category = new ProductsCategory.SodaCategory()    
    imgUrl(){
        return pathImg + "drinks/SpriteCan.png"
    }
    // image = new ProductsCategory.SodaCategory().getImgUrl("drinks/SpriteCan.png")
}


class Gummies implements Product {
    name = "Gummies" 
    price = 1.9
    category = new ProductsCategory.CandyCategory()
    
    imgUrl(){
        return pathImg + "food/Candy.png"
    }
    // image = new ProductsCategory.SodaCategory().getImgUrl("food/Candy.png")
}

class MM implements Product {
    name = "M&Ms" 
    price = 1.9
    category = new ProductsCategory.CandyCategory()
    
    imgUrl(){
        return pathImg + "food/Candy.png"
    }
    // image = new ProductsCategory.SodaCategory().getImgUrl("food/Candy.png")
}
class Mars implements Product {
    name = "Mars" 
    price = 2.1
    category = new ProductsCategory.CandyBar()
    
    imgUrl(){
        return pathImg + "food/CandyBar.png"
    }
    // image = new ProductsCategory.SodaCategory().getImgUrl("food/CandyBar.png")
}
 
// category.getImgUrl(img) = "Soda.png";
class MilkyWay implements Product {
    name = "Milky Way" 
    price = 1.9
    category = new ProductsCategory.CandyBar()
    
    imgUrl(){
        return pathImg + "food/MilkyWay.png"
    }
    // image = new ProductsCategory.SodaCategory().getImgUrl("drinks/SodaCan.png")
}
class Ruffles implements Product {
    name = "Ruffles" 
    price = 2.5
    category = new ProductsCategory.ChipsCategory()
    
    imgUrl(){
        return pathImg + "food/Ruffles.png"
    }
    // image = new ProductsCategory.SodaCategory().getImgUrl("food/Chips.png")
}
class Lays implements Product {
    name = "Lay's" 
    price = 2.5
    category = new ProductsCategory.ChipsCategory()   
    imgUrl(){
        return pathImg + "food/Lays.png"
    }

    // image = new ProductsCategory.SodaCategory().getImgUrl("food/Chips.png")
}
 export {
     Product,
     Lays,
     Ruffles,
     MilkyWay,
     Mars,
     MM,
     CocaCola,
     Sprite,
     Gummies,
     Inital
 }