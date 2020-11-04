class Wizard {
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

const wizard1 = new Wizard('xanthu', 'lighting', 'water', 'lumbridge');
wizard1.introduce();
