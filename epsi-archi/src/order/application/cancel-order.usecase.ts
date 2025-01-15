import Order from "../domain/order.entity";
import { OrderContainer } from "../order.container";

export class CancelOrderUseCase {
  cancelOrder(id: number): Order | { error: string } {
    
    const orderRepository = OrderContainer.getOrderRepository();
    const order = orderRepository.findById(id);

    if (!order) {
        throw new Error("Order not found");
    }
    try {
        order.cancel();
      const orderPersisted = orderRepository.update(order);
      return orderPersisted;
    } catch (error: any) {
      return { error: error.message };
    }
  }
}