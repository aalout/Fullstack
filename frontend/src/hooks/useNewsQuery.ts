import { useQuery } from '@tanstack/react-query';
import { fetchNews } from '../services/fetch';

const useNewsQuery = () => {
    return useQuery({
        // queryFn: () => fetchCategories(),
        queryFn: fetchNews,
        queryKey: ['news'],
        staleTime: 1000 * 5,
    });
};

export { useNewsQuery };