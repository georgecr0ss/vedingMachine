abstract class Coin { 
    protected pathImg = "img/coins/"
    constructor(public value:number) {
        this.value = value;
    }
    abstract getImgUrl(): string
}


class Dime extends Coin { 

    constructor(){
        super(.10)
    } 
    getImgUrl(): string {
        return this.pathImg + "Dime.png"
    }
}

class Quater extends Coin {  
    constructor(){
        super(.25)
    }
    getImgUrl() {
        return this.pathImg + "Quater.png"
    }
}

class Half extends Coin{
    constructor() {
        super(.50)
    }
    getImgUrl() {
        return this.pathImg + "Half.png"
    }
}

class Dollar extends Coin {    
    constructor() {
        super(1)
    }
    getImgUrl() {
        return this.pathImg + "Dollar.png"
    }
}