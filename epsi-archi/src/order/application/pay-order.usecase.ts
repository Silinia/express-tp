import Order from "../domain/order.entity";
import OrderRepository from "../domain/order.repository.interface";

export class PayOrderUseCase {

    private readonly orderRepository: OrderRepository;

    constructor(orderRepository: OrderRepository) {
        this.orderRepository = orderRepository;
    }

  payOrder(orderId: number): Order {

    const order = this.orderRepository.findById(orderId);

    if (!order) {
      throw new Error("Order not found");
    }

    order.pay();

    const orderUpdated = this.orderRepository.update(order);

    return orderUpdated;
  }
}