import { Character } from "./character.class.js";
// const { Character } = require('./character.class.js');

export class UnitCharacter extends Character {
    constructor(name, type) {
        if (2 > name.length || name.length > 10) {
            throw new Error('Error input the number of characters Name Unit');
        }
        const creatUnit = Character.typeList.filter(item => Object.keys(item)[0] === type)
        if (creatUnit[0]) {
            super(name, type);
            this.health = 100;
            this.level = 1;
            this.attack = creatUnit[0][`${type}`].attack;
            this.defence = creatUnit[0][`${type}`].defence;
        } else {
            throw new Error('Error input Type Unit');
        }
    }
}

// module.exports = {
//     UnitCharacter,
// }
// const tor = new UnitCharacter('Tor', 'Magician')

// console.log(tor);