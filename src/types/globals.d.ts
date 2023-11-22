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
    priorityPrice: number;
    orderPrice: number;
    estimatedDelivery: string;
    cart: Cart;
    status: string;
  };

  type NewOrder = {
    customer?: string;
    phone?: string;
    address?: string;
    priority?: boolean;
    cart: Cart;
  };

  type GeoLocalisation = {
    latitude: string;
    longitude: string;
  };

  type User = {
    username: string | undefined;
    status: "idle" | "loading" | "error";
    position: GeoLocalisation | undefined;
    address: string;
    error: string;
  };

  type GeoLocation = { coords: { latitude: string; longitude: string } };
}
