export {};

declare global {
  // Global namespace

  type Pizza = {
    id: number;
    imageUrl: string;
    ingredients: string[];
    name: string;
    soldOut: boolean;
    unitPrice: number;
  };

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

  type geoLocalisation = {
    latitude: string;
    longitude: string;
  };
}
