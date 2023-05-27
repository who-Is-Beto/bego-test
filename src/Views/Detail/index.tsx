import DetailCard from '@/components/DetailCard';
import { useGetOrderQuery } from '@/store/services/OrdersService';
import React from 'react';
import { useParams } from 'react-router-dom';

const Detail: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const { data, isLoading } = useGetOrderQuery(id as string);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DetailCard details={data!.result} />
    </div>
  );
};

export default Detail;
