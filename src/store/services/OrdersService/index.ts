import { rootServices } from '../rootService';

const ordersService = rootServices.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<GetOrders, void>({
      query: () => ({
        url: () => `orders`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          apikey: 'admin123',
        },
      }),
    }),

    getUpcomingOrders: builder.query<Orders, void>({
      query: () => ({
        url: () => `orders/upcoming`,
        method: 'GET',
      }),
    }),

    getCompletedOrders: builder.query<Orders, void>({
      query: () => ({
        url: () => `orders/completed`,
        method: 'GET',
      }),
    }),

    getPastOrders: builder.query<Orders, void>({
      query: () => ({
        url: () => `orders/past`,
        method: 'GET',
      }),
    }),

    getOrder: builder.query<GetOrders, string>({
      query: (id) => ({
        url: () => `orders/#${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetUpcomingOrdersQuery,
  useGetCompletedOrdersQuery,
  useGetPastOrdersQuery,
  useGetOrderQuery,
} = ordersService;
