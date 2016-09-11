abstract class ProductCategory {
    protected pathImg = "img/"
    name: string
    abstract getImgUrl(): string
}

class SodaCategory extends ProductCategory{
    name = "Soda"
    img: string
    getImgUrl() {
        return this.pathImg + "drinks/SodaCan.png"
    }
}

class ChipsCategory extends ProductCategory {
    name = "Chips"
    getImgUrl() {
        return this.pathImg + "food/Chips.png"
    }
}

class CandyCategory extends ProductCategory {
    name = "Candy"
    getImgUrl() {
        return this.pathImg + "food/Candy.png"
    }
}

class CandyBar extends ProductCategory {
    name = "CandyBar"
    getImgUrl() {
        return this.pathImg + "food/CandyBar.png"
    }
}