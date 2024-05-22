import { useQuery } from '@tanstack/react-query';
import { fetchPromos } from '../services/fetch';

const usePromoQuery = () => {
    return useQuery({
        // queryFn: () => fetchCategories(),
        queryFn: fetchPromos,
        queryKey: ['promos'],
        staleTime: 1000 * 5,
    });
};

export { usePromoQuery };