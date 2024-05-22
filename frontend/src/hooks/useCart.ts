import { useQuery } from '@tanstack/react-query';
import { fetchCart } from '../services/fetch';

const useCart = () => {
    return useQuery({
        // queryFn: () => fetchCategories(),
        queryFn: fetchCart,
        queryKey: ['cart'],
        staleTime: 1000 * 5,
    });
};

export { useCart };