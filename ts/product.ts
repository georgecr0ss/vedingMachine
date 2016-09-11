/// <reference path="./productCategory.ts" />
interface Product {
    name: string
    price: number
    category?: ProductCategory
}

class Inital implements Product {
    name = "Please select a product"
    price = 0 
}

class CocaCola implements Product {
    name = "Coca-Cola" 
    price = 2.3
    category = new SodaCategory()
}

class Sprite implements Product {
    name = "Sprite" 
    price = 2.3
    category = new SodaCategory()
}


class Gummies implements Product {
    name = "Gummies" 
    price = 1.9
    category = new CandyCategory()
}

class MM implements Product {
    name = "M&Ms" 
    price = 1.9
    category = new CandyCategory()
}
class Mars implements Product {
    name = "Mars" 
    price = 2.1
    category = new CandyBar()
}
 
// category.getImgUrl(img) = "Soda.png";
class MilkyWay implements Product {
    name = "Milky Way" 
    price = 1.9
    category = new CandyBar()
}
class Ruffles implements Product {
    name = "Ruffles" 
    price = 2.5
    category = new ChipsCategory()
}
class Lays implements Product {
    name = "Lay's" 
    price = 2.5
    category = new ChipsCategory()
}
