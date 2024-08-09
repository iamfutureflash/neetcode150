// 380. Insert Delete GetRandom O(1)
class RandomizedSet {
    private map: Map<number, number>;
    private list: number[];
    constructor() {
        this.map = new Map();
        this.list = [];
    }

    getList() {
        return this.list;
    }
    getMap() {
        return this.map;
    }

    insert(val: number): boolean {
        if (this.map.has(val)) return false;
        this.map.set(val, this.list.length);
        this.list.push(val);
        return true;
    }

    remove(val: number): boolean {
        if (!this.map.has(val)) return false;
        let index = this.map.get(val)!;
        let lastElement = this.list[this.list.length - 1];

        this.list[index] = lastElement;
        this.map.set(lastElement, index);

        this.list.pop();
        this.map.delete(val);
        return true;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.list.length);
        return this.list[randomIndex]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */


// var obj = new RandomizedSet()
// console.log(obj.insert(5));
// console.log(obj.insert(8));
// console.log(obj.insert(4));
// console.log(obj.insert(1));
// console.log(obj.insert(3));
// console.log(obj.insert(5));
// console.log(obj.insert(4));

// // console.log(obj.remove(5));

// console.log(obj.getRandom());
// console.log(obj.getList());
// console.log(obj.getMap());



class RandomizedSet1 {
    private map: Map<number, Set<number>>;
    private list: number[];

    constructor() {
        this.map = new Map();
        this.list = [];
    }
    getList() {
        return this.list;
    }
    getMap() {
        return this.map;
    }

    insert(val: number): boolean {
        const index = this.list.length;
        this.list.push(val);

        if (!this.map.has(val)) this.map.set(val, new Set());

        this.map.get(val)!.add(index);
        return true;
    }

    remove(val: number): boolean {
        if (!this.map.has(val)) return false;
        // console.log('1', this.map, this.list);

        const indices = this.map.get(val)!;
        if (indices.size === 0) return false;

        const indexToRemove = indices.values().next().value;
        indices.delete(indexToRemove);

        if (indices.size === 0) {
            this.map.delete(val); // remove the value from map if their is no index
        }
        // console.log('2', this.map, this.list);
        const lastElement = this.list[this.list.length - 1];
        if (indexToRemove !== this.list.length - 1) {
            this.list[indexToRemove] = lastElement;
            this.map.get(lastElement)!.delete(this.list.length - 1);
            this.map.get(lastElement)!.add(indexToRemove);
        }
        // console.log('3', this.map, this.list);
        this.list.pop();
        // console.log("indices", indices, "indexToRemove", indexToRemove);
        return true;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.list.length);
        return this.list[randomIndex];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj1 = new RandomizedSet1();
obj1.insert(1); // true
obj1.insert(2); // true
obj1.insert(3); // true
obj1.insert(4); // true
obj1.insert(5); // true
obj1.insert(3); // true (duplicate allowed)
obj1.insert(6); // true 
obj1.insert(3); // true (duplicate allowed)

obj1.remove(3); // true (removes one occurrence)

console.log(obj1.getRandom()); // random element
// console.log(obj1.getList()); // list of elements
// console.log(obj1.getMap()); // map of elements to their indices
