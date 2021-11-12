import {makeAutoObservable} from "mobx";
import {randomInt} from "../util/math";
import {Random} from "mockjs"
export type Person = {
    money: number;
    name: string;
}

class AverageMoney {
    people: Person[] = []
    count: number = 20

    constructor() {
        for (let i = 0; i < this.count; i += 1) {
            this.people.push({
                money: 30,
                name: Random.cname()
            })
        }
        makeAutoObservable(this)
    }

    exchange = () => {
        const giveTo = this.people.slice().map(() => randomInt(this.count))
        this.people = this.people.map((person, pIndex) => ({
            money: person.money - 1 + giveTo.filter(to => pIndex === to).length,
            name: person.name
        }))
    }

}

export default new AverageMoney()
