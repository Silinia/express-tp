

export default class Product {

    private id: number;

    private name: string;

    private price: number;

    constructor(name: string, price: number) {
        if (!name) {
            throw new Error("name is required");
        }

        if (!price) {
            throw new Error("price is required");
        }

        this.id = Math.floor(Math.random() * 100);
        this.name = name;
        this.price = price;
    }

}