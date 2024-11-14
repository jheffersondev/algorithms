class Stack {
    public items: any[];

    constructor(items: any[]) {
        this.items = items;
    }

    pop() {
        if (!this.items.length) {
            return;
        }
        this.items.pop();
        return this.items;
    }

    push(item: any) {
        this.items.push(item);
        return this.items;
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

const cars = new Stack(["Hilux", "Corolla", "Mercedes"]);
console.log(cars.pop());
console.log(cars.push('BMW'))
console.log(cars.peek())
