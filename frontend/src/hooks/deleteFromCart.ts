import { Cart } from '../types/cart';

export const deleteFromCart = async (id: number) => {
    try {
      const response = await fetch(`http://178.154.206.159:7676/api/cart/${id}`, {
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