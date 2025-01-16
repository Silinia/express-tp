import { CancelOrderUseCase} from './../../application/cancel-order.usecase';
import express from "express";
import { OrderContainer } from "../../order.container";

const router = express.Router();

import { CreateOrderUseCase } from "../../application/create-order.usecase";
import { PayOrderUseCase } from "../../application/pay-order.usecase";
import Product from "../../../Product/domain/product.entity";

router.post("", (request, response) => {
  const customerId = request.body.customerId;
  const products = request.body.products;

  const createOrderUseCase = new CreateOrderUseCase();

  try {
    const order = createOrderUseCase.createOrder(customerId, products);
    response.status(201).json(order);
  } catch (error: any) {
    response.status(400).json({ error: error.message });
  }
});

router.patch("/:orderId/pay", (request, response) => {
  const orderId = parseInt(request.params.orderId);
  const orderRepository = OrderContainer.getOrderRepository();

  const payOrderUseCase = new PayOrderUseCase(orderRepository);

  try {
    const order = payOrderUseCase.payOrder(orderId);
    response.status(200).json(order);
  } catch (error: any) {
    response.status(400).json({ error: error.message });
  }
});

router.patch("/:orderId/cancel", (request, response) => {
  const orderId = parseInt(request.params.orderId);

  const cancelOrderUseCase = new CancelOrderUseCase();

  try {
    const canceledOrder = cancelOrderUseCase.cancelOrder(orderId);
    response.status(200).json(canceledOrder);
  } catch (error: any) {
    response.status(400).json({ error: error.message });
  }
});

export default router;