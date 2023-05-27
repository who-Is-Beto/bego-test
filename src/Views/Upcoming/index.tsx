import React from 'react';
import OrderTemplate from '../OrderTemplate';
import { useGetUpcomingOrdersQuery } from '@/store/services/OrdersService';
import OrderCard from '@/components/OrderCard';

const Upcoming: React.FC = (): JSX.Element => {
  const { data, isLoading } = useGetUpcomingOrdersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <OrderTemplate>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {data?.result.map((order) => (
          <OrderCard order={order} key={order._id} />
        ))}
      </div>
    </OrderTemplate>
  );
};

export default Upcoming;
