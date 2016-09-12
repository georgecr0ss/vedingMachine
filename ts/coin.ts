// namespace Coins {

    let pathImg = "img/coins/"

    export abstract class Coin {  
        constructor(public value:number) {
            this.value = value;
        }
        abstract getImgUrl(): string
    }


    export class Dime extends Coin { 

        constructor(){
            super(.10)
        } 
        getImgUrl(): string {
            return pathImg + "Dime.png"
        }
    }

    export class Quater extends Coin {  
        constructor(){
            super(.25)
        }
        getImgUrl() {
            return pathImg + "Quater.png"
        }
    }

    export class Half extends Coin{
        constructor() {
            super(.50)
        }
        getImgUrl() {
            return pathImg + "Half.png"
        }
    }

    export class Dollar extends Coin {    
        constructor() {
            super(1)
        }
        getImgUrl() {
            return pathImg + "Dollar.png"
        }
    }
// }