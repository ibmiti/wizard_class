class Player {
    constructor(name,main_element,second_element,home_town){
        this.name = name;
        this.main_element = main_element;
        this.second_element = second_element;
        this.home_town = home_town;
    }
    introduce(){
        console.log(`Hello I am ${this.name} from the great ${this.home_town} I am a ${this.main_element} weilder, with my secondary element being ${this.second_element}`);
    }
}

// when we extend a class we must call constructor to the newly constructed class
class Wizard extends Player {
    constructor(name,main_element,second_element,home_town){
        // when inheriting the properties from the inherited class super helps us gain the context to our class
        super(name,main_element,second_element,home_town);
    }
    play() {
        console.log(`WOOOOO i'm a ${this.main_element}/${this.second_element} based wizard!`);
    }
} 

const wizard1 = new Wizard('xanthu', 'lighting', 'water', 'lumbridge');
const wizard2 = new Wizard('zamorak', 'Fire', 'earth', 'falador');
wizard1.introduce();
wizard2.introduce();
wizard1.play();
wizard2.play();

