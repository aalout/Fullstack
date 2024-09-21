import { Cart } from '../types/cart';

export const deleteFromCart = async (id: number) => {
    try {
      const response = await fetch(`http://84.201.170.155:3031/api/cart/${id}`, {
        mode: 'cors',
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
      } else {
        const error = await response.json();
      }
    } catch (error) {
    }
  };