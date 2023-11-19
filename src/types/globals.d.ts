export {};

declare global {
  // Global namespace

  type Item = {
    pizzaId: number;
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  };

  type Cart = Item[];

  type Order = {
    id: string;
    customer: string;
    phone: string;
    address: string;
    priority: boolean;
    estimatedDelivery: string;
    cart: Cart;
  };
}
