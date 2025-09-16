class Hero{

    constructor(name,health,attack){
        this.name = name;
        this.health = health; 
        this.attack = attack; 
    }

    getName(){
        return this.name;
    }
    getHealth(){
        return this.health;
    }
    showStats(){
        console.log("Name: "+ this.name);
        console.log("Health: "+ this.health);
        console.log("Attack: "+ this.attack);
        console.log("----------------------")
    }
    class Warrior extends Hero {
        useAbility() {
            console.log(`${this.name} user Power Strike`);
        }
}

class Mage extends Hero {
    constructor(name, health, mana) {
        super(name, health);
        this.mana = mana; 
    }


   useAbility(){
    console.log(`${this.name} cast Fireball!`);
}

}

const Thorin = new Hero("Thorin", 100, 10);
const hero2 = new Hero("Gandalf", 120, 8);


//Thorin.showStats();
//Thorin.useAbility();
Gandalf.showStats();
Gandalf.useAbility();