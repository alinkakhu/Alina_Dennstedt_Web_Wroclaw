export type Product = {
    id: number;
    name: string;
    price: {
      main: number;
      fractional: number;
    };
  };

export type CartItem = {
  product: Product;
  quantity: number;
};

  