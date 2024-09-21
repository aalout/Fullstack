import { Cart } from '../types/cart';

export const updateQuantity = async (id: number, quantity: number) => {
    try {
      const response = await fetch(`http://84.201.170.155:3031/api/cart/${id}`, {
        mode: 'cors',
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
      });
  
      if (response.ok) {
      } else {
        const error = await response.json();
      }
    } catch (error) {
    }
  };
  