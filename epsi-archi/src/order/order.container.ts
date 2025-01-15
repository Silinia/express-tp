import OrderRepository from "./infrastructure/order.repository";

export class OrderContainer {
    private static orderRepository: OrderRepository;

    public static getOrderRepository(): OrderRepository {
        if (!this.orderRepository) {
            this.orderRepository = new OrderRepository();
        }

        return this.orderRepository;
    }
}