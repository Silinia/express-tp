import Order from "./order.entity";

export default interface OrderRepository {
    create(order: Order): Order;
    findAll(): Order[];
    findById(id: number): Order | undefined;
    update(order: Order): Order;
}