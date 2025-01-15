import Product from "../../Product/domain/product.entity";
import Order from "../domain/order.entity";
import { OrderContainer } from "../order.container";

export class CreateOrderUseCase {
  createOrder(customerId: number, products: Product[]): Order | { error: string } {
    const orderCreated = new Order(customerId, products);
    const orderRepository = OrderContainer.getOrderRepository();

    try {
      const orderPersisted = orderRepository.create(orderCreated);
      return orderPersisted;
    } catch (error: any) {
      return { error: error.message };
    }
  }
}