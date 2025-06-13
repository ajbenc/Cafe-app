import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const ORDER_URL = 'http://localhost:4000/api/orders';

export function useCreateOrder() {
  return useMutation({
    mutationFn: async (order) => {
      const res = await axios.post(ORDER_URL, order);
      return res.data;
    },
  });
}
