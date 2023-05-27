import React from 'react';
import OrderTemplate from '../OrderTemplate';
import { useGetCompletedOrdersQuery } from '@/store/services/OrdersService';
import OrderCard from '@/components/OrderCard';

const Completed: React.FC = (): JSX.Element => {
  const { data, isLoading } = useGetCompletedOrdersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <OrderTemplate>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {data!.result.length === 0 && <div>No order completed found :C</div>}
        {data!.result.length > 0 &&
          data?.result.map((order) => <OrderCard order={order} key={order._id} />)}
      </div>
    </OrderTemplate>
  );
};

export default Completed;
