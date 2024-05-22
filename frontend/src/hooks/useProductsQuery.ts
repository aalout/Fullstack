import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/fetch';

const useProductQuery = () => {
    return useQuery({
        // queryFn: () => fetchCategories(),
        queryFn: fetchProducts,
        queryKey: ['products'],
        staleTime: 1000 * 5,
    });
};

export { useProductQuery };