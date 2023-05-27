import React, { useMemo } from 'react';
import OrderTemplate from '../OrderTemplate';
import { useGetPastOrdersQuery } from '@/store/services/OrdersService';
import OrderCard from '@/components/OrderCard';
import Input from '@/components/Input/Input';

const Past: React.FC = (): JSX.Element => {
  const { data, isLoading } = useGetPastOrdersQuery();
  const [searchItem, setSearchItem] = React.useState<string>('');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const filteredOrders = useMemo(() => {
    if (!searchItem) return data?.result;
    return data?.result.filter((order) =>
      order.order_number.toLowerCase().includes(searchItem.toLowerCase()),
    );
  }, [searchItem]);

  return (
    <OrderTemplate>
      <div className="w-11/12 mx-auto">
        <Input
          type="search"
          icon="search"
          placeholder="search..."
          handleChange={(event) => setSearchItem(event.target.value)}
          name="searchItem"
          value={searchItem}
        />
      </div>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {filteredOrders &&
          filteredOrders.map((order) => <OrderCard order={order} key={order._id} />)}
        {!filteredOrders &&
          data?.result.map((order) => <OrderCard order={order} key={order._id} />)}
        {filteredOrders && filteredOrders.length === 0 && <div>No order found :C</div>}
      </div>
    </OrderTemplate>
  );
};

export default Past;
