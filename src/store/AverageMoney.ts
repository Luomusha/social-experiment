import {makeAutoObservable} from "mobx";
import {randomInt} from "../util/math";
import {Random} from "mockjs"

export type Person = {
    money: number;
    name: string;
    target: boolean;
}

class AverageMoney {
    people: Person[] = []
    target: Person[] = [{
        target: true,
        money: 50,
        name: '富二代'
    }]
    count: number = 20

    constructor() {
        const normal = []
        for (let i = 0; i < this.count; i += 1) {
            normal.push({
                money: 30,
                name: Random.cname(),
                target: false
            })
        }
        this.people = [...this.target, ...normal]
        makeAutoObservable(this)
    }

    exchange = () => {
        const giveTo = this.people.slice().map(() => randomInt(this.people.length))
        this.people = this.people.map((person, pIndex) => ({
            money: person.money - 1 + giveTo.filter(to => pIndex === to).length,
            name: person.name,
            target: person.target
        }))
    }

}

export default new AverageMoney()
