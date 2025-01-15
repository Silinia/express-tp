import Order from "../domain/order.entity";

export default class OrderRepository {
  private orders: Order[] = [];

  create(order: Order): Order {
    this.orders.push(order);

    return order;
  }

  findAll(): Order[] {
    return this.orders;
  }

  findById(id: number): Order | undefined {
    return this.orders.find((order) => order.getId() === id);
  }

  update(order: Order): Order {
    this.orders = this.orders.map((orderInList) => {
      if (orderInList.getId() === order.getId()) {
        return order;
      }

      return orderInList;
    });

    return order;
  }
}