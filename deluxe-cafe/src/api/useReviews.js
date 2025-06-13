import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const REVIEWS_URL = 'http://localhost:4000/api/reviews';

export function useReviews() {
  return useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const res = await axios.get(REVIEWS_URL);
      return res.data;
    },
  });
}

export function useSubmitReview() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async (review) => {
      await axios.post(REVIEWS_URL, review);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['reviews'] });
    },
  });
}
