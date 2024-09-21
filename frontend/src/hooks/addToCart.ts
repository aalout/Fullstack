import { Cart } from '../types/cart';

export const addToCart = async (productId: number, quantity: number, price: number, image: string, title: string) => {
  const userId = 1;
  const cartData: Omit<Cart, 'id'> = { userId, productId, quantity, price, title, image };

  try {
    const response = await fetch('http://84.201.170.155:3031/api/cart', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartData),
    });

    if (response.ok) {
      const createdCart = await response.json();
      return createdCart;
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    throw error;
  }
};