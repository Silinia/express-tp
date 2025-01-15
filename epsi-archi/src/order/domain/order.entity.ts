import Product from "../../Product/domain/product.entity";

export default class Order {
  private id: number;

  private static nbOfOrders: number = 0;

  private createdAt: Date;

  private total: number;

  private customer: number;

  private products: Product[];

  private status: string;

  private paidAt: Date;

  constructor(customerId: number, products: Product[]) {
    if (!customerId) {
      throw new Error("customerId is required");
    }

    if (products.length > 2) {
      throw new Error("You can't add more than 2 products");
    }

    Order.nbOfOrders += 1;
    this.id = Order.nbOfOrders;
    this.createdAt = new Date();
    this.customer = customerId;
    this.products = products;
    this.status = "cart";

    this.total = products.reduce((acc, product) => {
      return acc + 5;
    }, 0);
  }

  getId(): number {
    return this.id;
  }

  cancel(): void {
    if (this.status === "paid") {
      throw new Error("You can't cancel a paid order");
    }

    if (this.status === "canceled") {
      throw new Error("Order already canceled");
    }

    this.status = "canceled";
  }

  pay(): void {
    if (this.products.length === 0) {
      throw new Error("You can't pay an empty cart");
    }

    if (this.status === "paid") {
      throw new Error("Order already paid");
    }

    if (this.status === "canceled") {
      throw new Error("You can't pay a canceled order");
    }

    if (this.total === 0) {
      throw new Error("You can't pay an empty cart");
    }

    this.status = "paid";
    this.paidAt = new Date();
  }
}